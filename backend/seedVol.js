const mongoose = require("mongoose");
const Volunteer = require("./models/voluntermodel"); // Update with the correct path to the Volunteer model

require("dotenv").config();

// Sample ObjectIds
const sampleUserIds = [
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab1"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab2"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab3"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab4"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab5"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab6"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab7"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab8"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37ab9"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37aba"),
];

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

const sampleAssignmentIds = [
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb1"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb2"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb3"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb4"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb5"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb6"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb7"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb8"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cb9"),
  new mongoose.Types.ObjectId("60d5ec49a809333b8ca37cba"),
];

const seedVolunteers = async () => {
  try {
    // Prepare volunteer data with _id field from sampleUserIds
    const volunteerData = [
      {
        _id: sampleUserIds[0], // Assigning _id from sampleUserIds
        currentlocation: "Village A",
        user: sampleUserIds[0],
        beneficiary: [sampleBeneficiaryIds[0], sampleBeneficiaryIds[1]],
        assignment: [sampleAssignmentIds[0], sampleAssignmentIds[1]],
      },
      {
        _id: sampleUserIds[1],
        currentlocation: "Village B",
        user: sampleUserIds[1],
        beneficiary: [sampleBeneficiaryIds[1], sampleBeneficiaryIds[2]],
        assignment: [sampleAssignmentIds[1], sampleAssignmentIds[2]],
      },
      {
        _id: sampleUserIds[2],
        currentlocation: "Village C",
        user: sampleUserIds[2],
        beneficiary: [sampleBeneficiaryIds[2], sampleBeneficiaryIds[3]],
        assignment: [sampleAssignmentIds[2], sampleAssignmentIds[3]],
      },
      {
        _id: sampleUserIds[3],
        currentlocation: "Village D",
        user: sampleUserIds[3],
        beneficiary: [sampleBeneficiaryIds[3], sampleBeneficiaryIds[4]],
        assignment: [sampleAssignmentIds[3], sampleAssignmentIds[4]],
      },
      {
        _id: sampleUserIds[4],
        currentlocation: "Village E",
        user: sampleUserIds[4],
        beneficiary: [sampleBeneficiaryIds[4], sampleBeneficiaryIds[5]],
        assignment: [sampleAssignmentIds[4], sampleAssignmentIds[5]],
      },
      {
        _id: sampleUserIds[5],
        currentlocation: "Village F",
        user: sampleUserIds[5],
        beneficiary: [sampleBeneficiaryIds[5], sampleBeneficiaryIds[6]],
        assignment: [sampleAssignmentIds[5], sampleAssignmentIds[6]],
      },
      {
        _id: sampleUserIds[6],
        currentlocation: "Village G",
        user: sampleUserIds[6],
        beneficiary: [sampleBeneficiaryIds[6], sampleBeneficiaryIds[7]],
        assignment: [sampleAssignmentIds[6], sampleAssignmentIds[7]],
      },
      {
        _id: sampleUserIds[7],
        currentlocation: "Village H",
        user: sampleUserIds[7],
        beneficiary: [sampleBeneficiaryIds[7], sampleBeneficiaryIds[8]],
        assignment: [sampleAssignmentIds[7], sampleAssignmentIds[8]],
      },
      {
        _id: sampleUserIds[8],
        currentlocation: "Village I",
        user: sampleUserIds[8],
        beneficiary: [sampleBeneficiaryIds[8], sampleBeneficiaryIds[9]],
        assignment: [sampleAssignmentIds[8], sampleAssignmentIds[9]],
      },
      {
        _id: sampleUserIds[9],
        currentlocation: "Village J",
        user: sampleUserIds[9],
        beneficiary: [sampleBeneficiaryIds[9], sampleBeneficiaryIds[0]],
        assignment: [sampleAssignmentIds[9], sampleAssignmentIds[0]],
      },
    ];

    // Insert volunteer data into the database
    await Volunteer.insertMany(volunteerData);

    console.log("Volunteer data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding volunteer data:", err);
    process.exit(1);
  }
};

// Connect to MongoDB and seed data
mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for seeding.");
    seedVolunteers();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
