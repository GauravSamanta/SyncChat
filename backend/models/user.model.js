import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "Full Name is required",
  },
  username: {
    type: String,
    required: "Username is required",
    unique: true,
  },
  password: {
    type: String,
    required: "Password is required",
    minlength: 6,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  profilePicture: {
    type: String,
    default: "",
  },
},{timestamps:true});
const User = mongoose.model("User", userSchema);

export default User;
