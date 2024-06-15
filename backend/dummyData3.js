const mongoose = require("mongoose");

const Beneficiary = require("./models/beneficiaryModel");

const dummyData3 = [
  {
    name: "Alice Johnson",
    aadhar: 123456789012,
    gender: "Female",
    age: 32,
    disabled: false,
    widowed: false,
    goats: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "Bob Smith",
    aadhar: 987654321098,
    gender: "Male",
    age: 45,
    disabled: true,
    widowed: false,
    goats: [
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "Eve Williams",
    aadhar: 456789012345,
    gender: "Female",
    age: 28,
    disabled: false,
    widowed: false,
    goats: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "Charlie Brown",
    aadhar: 111222333444,
    gender: "Male",
    age: 55,
    disabled: true,
    widowed: true,
    goats: [],
  },
  {
    name: "Grace Davis",
    aadhar: 555666777888,
    gender: "Female",
    age: 40,
    disabled: false,
    widowed: true,
    goats: [
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "Daniel Miller",
    aadhar: 999888777666,
    gender: "Male",
    age: 30,
    disabled: false,
    widowed: false,
    goats: [],
  },
  {
    name: "Sophia Wilson",
    aadhar: 222333444555,
    gender: "Female",
    age: 42,
    disabled: true,
    widowed: false,
    goats: [],
  },
  {
    name: "Oliver Martinez",
    aadhar: 777888999000,
    gender: "Male",
    age: 48,
    disabled: false,
    widowed: false,
    goats: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "Emma Garcia",
    aadhar: 333444555666,
    gender: "Female",
    age: 35,
    disabled: true,
    widowed: true,
    goats: [
      new mongoose.Types.ObjectId(),
    ],
  },
  {
    name: "James Robinson",
    aadhar: 888999000111,
    gender: "Male",
    age: 50,
    disabled: false,
    widowed: false,
    goats: [
      new mongoose.Types.ObjectId(),
    ],
  },
];

module.exports = dummyData3;
