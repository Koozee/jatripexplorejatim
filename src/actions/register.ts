"use server"
import { dbConnect } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

async function sendLog(level: any, message: any) {
    try {
        const response = await fetch('http://localhost:5001/log', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ level: level, message }),
        });
        if (!response.ok) throw new Error("Server responded, but not with an OK status")
    } catch (error) {
        console.error("Could not send log message:", error);
    }
}

export const register = async (values: any) => {
    const { email, password, username } = values;

    try {
        await dbConnect();
        const userFound = await User.findOne({ email });
        if (userFound) {
            return {
                error: 'Email telah terdaftar!'
            }
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
        });
        await user.save();
        await sendLog(`INFO`, `Email dengan nama: ${email} dan username: ${username} berhasil terdaftar di Jatrip!`);

    } catch (e) {
        console.log(e);
    }
}