import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    Uname: { type: String, required: [true, "username is required"] },
    Uemail: { type: String, required: [true, "useremail is required"] },
    Upass: { type: String, required: [true, "userpass is required"] },
    blogs: [{ type: mongoose.Types.ObjectId, ref: "blog" }]
}, { timestamps: true });

const UserModel = mongoose.model("user", UserSchema);
export default UserModel;