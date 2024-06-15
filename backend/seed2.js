const dummyGoats = require("./dummyData2");
const Goat = require("./models/goatmodel");

async function storeDummyData() {
  try {
  
    await Goat.deleteMany({});
    await Goat.insertMany(dummyGoats);
    console.log("Dummy data successfully inserted");
  } catch (err) {
    console.error("Error inserting dummy data:", err);
  }
}

storeDummyData();
