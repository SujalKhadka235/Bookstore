import mongoose from "mongoose";
import User from "../Model/user.model.js";
import bcrypt, { hash } from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.json("Sorry user already exists");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(200).json({
      msg: "User registered sucessfully",
      user: {
        _id: createdUser._id,
        fullname: createdUser.fullname,
        email: createdUser.email,
      },
    });
    console.log("user registered sucessfully");
  } catch (error) {
    console.log("Error" + error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!user || !isMatch) {
      res.status(400).json({ msg: "sorry invalid username or password" });
    } else {
      res.status(200).json({
        msg: "Login succesfull",
        user: {
          _id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error:" + error.message);
    res.staus(500).json({ msg: "login failed" });
  }
};
