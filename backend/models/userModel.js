const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  mobileNo: { type: Number, required: true },
  password: String,
  role: { type: String },
  imageUrl: { type: String },
});

module.exports = mongoose.model("User", userSchema);
