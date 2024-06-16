const mongoose = require("mongoose");
const volunteerschema = mongoose.Schema({
  currentlocation: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  beneficiary: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Beneficiary",
    },
  ],
  assignment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
});
const Volunteer = mongoose.model("Volunteer", volunteerschema);
module.exports = Volunteer;
