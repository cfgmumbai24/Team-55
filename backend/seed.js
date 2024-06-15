const dummyAssignments = require("./dummyData");
const Assignment = require("./models/assignmentModel");

async function storeDummyData() {
  try {
   
    await Assignment.deleteMany({});
    await Assignment.insertMany(dummyAssignments);
    console.log("Dummy data successfully inserted");
  } catch (err) {
    console.error("Error inserting dummy data:", err);
  }
}

storeDummyData();
