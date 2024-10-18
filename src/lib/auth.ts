import { dbConnect } from "@/lib/mongodb";
import User from "@/models/user";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

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
        console.log("Credentials:", credentials); // Cek nilai credentials
        const user = await User.findOne({
          email: credentials?.email,
        }).select("+password");
        console.log("User found:", user); // Cek apakah pengguna ditemukan
        if (!user) throw new Error("Wrong Email");

        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Password");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Menggunakan JWT untuk sesi
    maxAge: 24 * 60 * 60, // Sesi bertahan 24 jam
  },
  jwt: {
    secret: process.env.AUTH_SECRET, // Pastikan ini ada di file .env
    encryption: true, // Menyediakan enkripsi untuk JWT
  },
  secret: process.env.AUTH_SECRET, // Tambahkan kunci rahasia
  pages: {
    signIn: '/auth/signin', // Sesuaikan dengan halaman sign in Anda
  },
};
