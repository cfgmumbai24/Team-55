const mongoose = require("mongoose");
const Assignment = require("./models/assignmentModel");

require("dotenv").config();

const seedAssignments = async () => {
  try {
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

    const assignmentData = [
      {
        _id: sampleAssignmentIds[0],
        village: "Village 1",
        username: "User 1",
        completed: true,
        date: new Date(),
        report: "Completed successfully",
        beneficiaryId: sampleBeneficiaryIds[0],
      },
      {
        _id: sampleAssignmentIds[1],
        village: "Village 2",
        username: "User 2",
        completed: false,
        date: new Date(),
        report: "Incomplete",
        beneficiaryId: sampleBeneficiaryIds[1],
      },
      {
        _id: sampleAssignmentIds[2],
        village: "Village 3",
        username: "User 3",
        completed: true,
        date: new Date(),
        report: "Completed with some issues",
        beneficiaryId: sampleBeneficiaryIds[2],
      },
      {
        _id: sampleAssignmentIds[3],
        village: "Village 4",
        username: "User 4",
        completed: false,
        date: new Date(),
        report: "Not completed",
        beneficiaryId: sampleBeneficiaryIds[3],
      },
      {
        _id: sampleAssignmentIds[4],
        village: "Village 5",
        username: "User 5",
        completed: true,
        date: new Date(),
        report: "Completed successfully",
        beneficiaryId: sampleBeneficiaryIds[4],
      },
      {
        _id: sampleAssignmentIds[5],
        village: "Village 6",
        username: "User 6",
        completed: false,
        date: new Date(),
        report: "Failed to complete",
        beneficiaryId: sampleBeneficiaryIds[5],
      },
      {
        _id: sampleAssignmentIds[6],
        village: "Village 7",
        username: "User 7",
        completed: true,
        date: new Date(),
        report: "Completed with modifications",
        beneficiaryId: sampleBeneficiaryIds[6],
      },
      {
        _id: sampleAssignmentIds[7],
        village: "Village 8",
        username: "User 8",
        completed: false,
        date: new Date(),
        report: "Incomplete due to weather conditions",
        beneficiaryId: sampleBeneficiaryIds[7],
      },
      {
        _id: sampleAssignmentIds[8],
        village: "Village 9",
        username: "User 9",
        completed: true,
        date: new Date(),
        report: "Completed with extra efforts",
        beneficiaryId: sampleBeneficiaryIds[8],
      },
      {
        _id: sampleAssignmentIds[9],
        village: "Village 10",
        username: "User 10",
        completed: false,
        date: new Date(),
        report: "Incomplete due to equipment failure",
        beneficiaryId: sampleBeneficiaryIds[9],
      },
    ];

    await Assignment.deleteMany({});
    await Assignment.insertMany(assignmentData);

    console.log("Assignment data seeded successfully!");
    process.exit();
  } catch (err) {
    console.error("Error seeding assignment data:", err);
    process.exit(1);
  }
};

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB for seeding assignments.");
    seedAssignments();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
