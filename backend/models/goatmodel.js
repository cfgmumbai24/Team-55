const mongoose = require("mongoose");
const goatschema = mongoose.Schema({
  weight: {
    type: Number,
    required: true,
  },
  tagno: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  vaccinationdate: {
    type: Date,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sellingdate: {
    type: Date,
    required: true,
  },
  motalitydate: {
    type: Date
  }
});
const Goat = mongoose.model("Goat", goatschema);
module.exports = Goat;
