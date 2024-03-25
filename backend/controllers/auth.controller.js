import User from "../models/user.model.js";
import bycrypt from "bcryptjs";
// import generateToken from "../utils/token.js";
import jwt from 'jsonwebtoken';
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const maleProfile = "https://avatar.iran.liara.run/public/boy";
    const femaleProfile = "https://avatar.iran.liara.run/public/girl";

    const salt = await bycrypt.genSalt(10);
    const hashedPassword = await bycrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? maleProfile : femaleProfile,
    });
    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ message: "Invalid User" });
    }
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bycrypt.compare(
      password,
      user?.password || ""
    );
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
console.log(user);
   const token=jwt.sign({user._id},process.env.JWT_SECRET,{  
    expiresIn:'15d'
    });
   console.log(token);
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
      token:token
      
    });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ message: "Something went wrong" });
  }
};
