// models/loginAttempt.js
import mongoose from "mongoose";

const loginAttemptSchema = new mongoose.Schema({
  email: { type: String, required: true },
  attempts: { type: Number, default: 0 },
  blockUntil: { type: Date, default: null },
});

export default mongoose.models.LoginAttempt || mongoose.model("LoginAttempt", loginAttemptSchema);
