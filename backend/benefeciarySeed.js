const mongoose = require("mongoose");
const Beneficiary = require("./models/beneficiaryModel");
require("dotenv").config();

const seedBeneficiaries = async () => {
  try {
    const sampleBeneficiaryIds = [
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb1"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb2"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb3"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb4"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb5"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb6"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb7"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb8"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bb9"),
      new mongoose.Types.ObjectId("60d5ec49a809333b8ca37bba"),
    ];

    const beneficiaryData = [
      {
        _id: sampleBeneficiaryIds[0],
        name: "Beneficiary 1",
        aadhar: 123456789012,
        gender: "Male",
        age: 50,
        disabled: false,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[1],
        name: "Beneficiary 2",
        aadhar: 234567890123,
        gender: "Female",
        age: 45,
        disabled: true,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[2],
        name: "Beneficiary 3",
        aadhar: 345678901234,
        gender: "Male",
        age: 60,
        disabled: true,
        widowed: true,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[3],
        name: "Beneficiary 4",
        aadhar: 456789012345,
        gender: "Female",
        age: 55,
        disabled: false,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[4],
        name: "Beneficiary 5",
        aadhar: 567890123456,
        gender: "Male",
        age: 70,
        disabled: true,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[5],
        name: "Beneficiary 6",
        aadhar: 678901234567,
        gender: "Female",
        age: 65,
        disabled: false,
        widowed: true,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[6],
        name: "Beneficiary 7",
        aadhar: 789012345678,
        gender: "Male",
        age: 40,
        disabled: true,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[7],
        name: "Beneficiary 8",
        aadhar: 890123456789,
        gender: "Female",
        age: 35,
        disabled: false,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[8],
        name: "Beneficiary 9",
        aadhar: 901234567890,
        gender: "Male",
        age: 25,
        disabled: false,
        widowed: false,
        goats: [],
      },
      {
        _id: sampleBeneficiaryIds[9],
        name: "Beneficiary 10",
        aadhar: 987654321098,
        gender: "Female",
        age: 30,
        disabled: true,
        widowed: true,
        goats: [],
      },
    ];

    await Beneficiary.deleteMany({});
    await Beneficiary.insertMany(beneficiaryData);

    console.log("Beneficiary data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding beneficiary data:", err);
    process.exit(1);
  }
};

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for seeding beneficiaries.");
    seedBeneficiaries();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
