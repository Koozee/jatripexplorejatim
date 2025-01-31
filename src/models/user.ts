import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
    _id: string;
    email: string;
    password: string;
    username: string;
    phone: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema = new Schema<UserDocument>({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Email is invalid",
        ],
    },
    username: {
        type: String,
        required: [true, "Username perlu dimasukkan!"]
    },
    password: {
        type: String,
        required: true
    }
},
    {
        timestamps: true,
    }
);

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;
