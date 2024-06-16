const mongoose = require("mongoose");
const Volunteer = require("./voluntermodel");

const assignmentSchema = new mongoose.Schema({
  village: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  completed: { type: Boolean },
  date: { type: Date, required: true },
  report: { type: String },
  benefeciaryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "beneficiary",
  },
  volunteerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "volunteer",
  },
});

module.exports = mongoose.model("Assignment", assignmentSchema);
