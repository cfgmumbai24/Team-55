const mongoose = require("mongoose");
const Volunteer = require("./models/voluntermodel"); 
const dummyBeneficiaries = require("./dummyData3");

async function seedBeneficiaries() {
  try {
    
   await Volunteer.deleteMany({});
    await Volunteer.insertMany(dummyBeneficiaries);
    console.log("Dummy beneficiaries successfully inserted ");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error inserting dummy beneficiaries:", err);
  }
}

seedBeneficiaries();
