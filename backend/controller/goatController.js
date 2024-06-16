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

const creategoatinfo = async (req, res) => {
  try {
    const { gender, tagno, weight, price, age, vaccinationdate, sellingdate } =
      req.body;
    const goat = new Goat({
      gender,
      tagno,
      weight,
      price,
      age,
      sellingdate,
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

const mortalityCount = async (req, res) => {
  try {
    const seasons = [
      { name: "Summer", months: [2, 3, 4, 5] },
      { name: "Monsoon", months: [6, 7, 8, 9] },  
      { name: "Winter", months: [9, 10, 11, 12] }, 
    ];
    
    const seasonCounts = [];
    
    for (const season of seasons) {
      const count = await Goat.countDocuments({
        $expr: {
          $in: [{ $month: "$motalitydate" }, season.months]
        }
      });
      seasonCounts.push({ season: season.name, count });
    }
    res.status(200).json(seasonCounts);
  } catch (error) {
    console.error("Error fetching season counts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { getgoatinfo, creategoatinfo, mortalityCount };
