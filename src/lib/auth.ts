import { dbConnect } from "@/lib/mongodb";
import User from "@/models/user";
import LoginAttempt from "@/models/loginAttempt"; // Import model percobaan login
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const MAX_ATTEMPTS = 10; // Batas percobaan login
const BLOCK_DURATION = 5 * 60 * 1000; // Durasi blokir dalam milidetik (5 menit)

async function updateLoginAttempt(email: any, loginAttempt: any) {
  if (loginAttempt.attempts + 1 >= MAX_ATTEMPTS) {
    loginAttempt.attempts = 0;
    loginAttempt.blockUntil = new Date(Date.now() + BLOCK_DURATION); // Blokir pengguna
    await sendLog('WARNING', `User ${email} diblokir selama 5 menit karena terlalu banyak percobaan login`);
  } else {
    loginAttempt.attempts += 1;
    await sendLog('INFO', `Percobaan login gagal untuk ${email}. Percobaan ke-${loginAttempt.attempts}`);
  }
  await loginAttempt.save();
}

async function sendLog(level: any, message: any) {
  await fetch('http://localhost:5001/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level: level, message }),
  });
}


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        // Cek percobaan login pengguna
        let loginAttempt = await LoginAttempt.findOne({ email: credentials?.email });
        if (!loginAttempt) {
          loginAttempt = await LoginAttempt.create({ email: credentials?.email });
        }

        // Cek apakah pengguna masih diblokir
        if (loginAttempt.blockUntil && loginAttempt.blockUntil > new Date()) {
          throw new Error("Terlalu banyak percobaan login. Silakan coba lagi nanti.");
        }

        // Temukan pengguna
        const user = await User.findOne({ email: credentials?.email }).select("+password");
        if (!user) {
          await updateLoginAttempt(credentials.email, loginAttempt);
          throw new Error("Wrong Email");
        }

        // Verifikasi kata sandi
        const passwordMatch = await bcrypt.compare(credentials!.password, user.password);
        if (!passwordMatch) {
          await updateLoginAttempt(credentials.email, loginAttempt);
          throw new Error("Wrong Password");
        }

        // Reset percobaan login jika berhasil login
        await LoginAttempt.updateOne({ email: credentials?.email }, { attempts: 0, blockUntil: null });
        return user;
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      await sendLog('INFO', `User ${user.email} berhasil login ke Jatrip`);
      return true;
    },

    async signOut({ token }) {
      await sendLog('INFO', `User ${token.email} berhasil logout`);
      return true;
    },
  },
  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
  jwt: { secret: process.env.AUTH_SECRET, encryption: true },
  secret: process.env.AUTH_SECRET,
  pages: { signIn: '/login' },
};

