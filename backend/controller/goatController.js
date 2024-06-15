const Goat = require("../models/goatmodel");

const getgoatinfo = async (req, res) => {
  try {
    const goat = await Goat.find({});
    res.send(200).json({
      success: true,
      message: "successfully fecthed goat into",
      goats: goat,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "error while fetching goat info",
    });
  }
};

const getgoatbyid = async (req, res) => {
  try {
    const { id } = req.body._id;
    const goat = await Goat.find({ _id: id });
    res.send(200).json({
      success: true,
      message: "successfully fecthed goat into",
      goats: goat,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "error while fetching goat info",
    });
  }
};

const creategoatinfo = async (req, res) => {
  try {
    const { gender, tagno, weight, price, age, vaccinationdate, date } =
      req.body;
    const goat = new Goat({
      gender,
      tagno,
      weight,
      price,
      age,
      date,
      vaccinationdate,
    });
    const saveuser = await goat.save();
    res.status(201).json({
      success: true,
      message: "successfully created goat",
    });
  } catch (err) {
    console.log(err);
    res.status(505).json({
      message: "error while creating goat",
      success: false,
    });
  }
};

module.exports = { getgoatinfo, getgoatbyid, creategoatinfo };
