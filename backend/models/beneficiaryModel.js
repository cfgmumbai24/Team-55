const mongoose = require("mongoose");

const beneficiarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  aadhar: { type: Number, unique: true, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  disabled: Boolean,
  widowed: Boolean,
  goats: [{type: mongoose.Schema.Types.ObjectId, ref:"Goat"}]
});

module.exports = mongoose.model("Beneficiary", beneficiarySchema);
