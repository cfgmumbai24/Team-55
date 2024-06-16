const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  village: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  completed: { type: Boolean },
  date: { type: Date, required: true },
  report: { type: String },
  beneficiaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Beneficiary",
  },
  volunteerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "volunteer",
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
