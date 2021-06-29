import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    avatarUrl: String,
    socialOnly: { type: Boolean, default: false },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String },
    location: String,
    videos: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Video" }
    ],
});

userSchema.pre('save', async function () {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 5);
    }
});

const User = mongoose.model("User", userSchema);

export default User;