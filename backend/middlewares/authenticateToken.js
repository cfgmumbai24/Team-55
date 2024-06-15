const express = require("express");

const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const authenticateToken = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      // console.log("Decode", decoded);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (e) {
      return res.status(403).json({ message: "Forbidden" });
    }
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
});

module.exports = authenticateToken;
