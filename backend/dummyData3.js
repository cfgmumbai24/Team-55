const mongoose = require("mongoose");

// Dummy data for volunteers
const dummyVolunteers = [
  {
    currentLocation: "Location 1",
    user: new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e1"), // Random ObjectId for User
    beneficiaries: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f1"), // Random ObjectId for Beneficiary 1
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f2"), // Random ObjectId for Beneficiary 2
    ],
    assignments: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e1"), // Random ObjectId for Assignment 1
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e2"), // Random ObjectId for Assignment 2
    ],
  },
  {
    currentLocation: "Location 2",
    user: new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e2"), // Random ObjectId for User
    beneficiaries: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f3"), // Random ObjectId for Beneficiary 3
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f4"), // Random ObjectId for Beneficiary 4
    ],
    assignments: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e3"), // Random ObjectId for Assignment 3
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e4"), // Random ObjectId for Assignment 4
    ],
  },
  {
    currentLocation: "Location 3",
    user: new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e3"), // Random ObjectId for User
    beneficiaries: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f5"), // Random ObjectId for Beneficiary 5
    ],
    assignments: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e5"), // Random ObjectId for Assignment 5
    ],
  },
  {
    currentLocation: "Location 4",
    user: new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e4"),
    beneficiaries: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f6"),
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f7"),
    ],
    assignments: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e6"),
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e7"),
    ],
  },
  {
    currentLocation: "Location 5",
    user: new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e5"),
    beneficiaries: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f8"),
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1f9"),
    ],
    assignments: [
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e8"),
      new mongoose.Types.ObjectId("60f6c7b1b4d1f8b5a6b1c1e9"),
    ],
  },
];

module.exports = dummyVolunteers;
