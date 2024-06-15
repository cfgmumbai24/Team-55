const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
require("dotenv").config();

// Signup API
const register = async (req, res) => {
  try {
    const alreadyUser = await User.findOne({ email: req.body.email });
    if (alreadyUser) {
      return res.status(200).send({
        status: false,
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
      role: req.body.role,
      mobileNo: req.body.mobileNo,
      imageUrl: req.body.imageUrl,
    });
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    const newUser = await user.save();
    const data = {
      email: newUser.email,
      role: newUser.role,
      mobileNo: newUser.mobileNo,
      imageUrl: newUser.imageUrl,
      username: newUser.username,
      role: newUser.role,
      token: token,
    };
    res.status(201).send({
      status: true,
      message: "User created successfully",
      data: data,
    });
  } catch (err) {
    // console.log(err);
    res.status(400).json({ message: err.message });
  }
};

// Login API
const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    data = {
      username: user.username,
      token: token,
    };
    res.status(200).send({
      status: true,
      message: "User logged in successfully",
      data: data,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUser = async (req, res) => {
  const users = await User.findOne({ _id: req?.user?._id }).select("-password");
  res.status(200).send(users);
};

module.exports = {
  register,
  login,
  getUser,
};
