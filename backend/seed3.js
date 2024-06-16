const Beneficiary = require("./models/beneficiaryModel");
const dummyData3 = require("./dummyData3");

async function seedBeneficiaryData() {
  try {
    // Delete existing Beneficiary documents (if needed)
    // Uncomment the next line if you want to delete existing data
    // await Beneficiary.deleteMany({});

    // Insert new Beneficiary documents
    await Beneficiary.insertMany(dummyData3);
  } catch (err) {
    console.error("Error seeding Beneficiary data:", err);
  }
}

seedBeneficiaryData();
