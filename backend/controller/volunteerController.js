const Volunteer = require("../models/voluntermodel");

const getvolunteer = async (req, res) => {
  try {
    const volunteers = await Volunteer.find({})
      .populate("user") // Populate if you need user details
      .populate("beneficiary") // Populate if you need beneficiary details
      .populate("assignment"); // Populate if you need assignment details

    res.status(201).json({
      success: true,
      message: "Successfully fetched the volunteer data",
      volunteers,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching volunteers",
    });
  }
};

const getvolunteerbyid = async (req, res) => {
  try {
    const { id } = req.body;
    const user = Volunteer.find({ _id: id });
    res.status(201).json({
      success: true,
      message: "successfully fetched the volunteer data",
      volunteers: user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: true,
      message: "error while voultneer fetching",
    });
  }
};

const getVolunteerAssignment = async (req, res) => {
  try {
    const { id } = req.body;
    const volunteerAssignments = Volunteer.find({ _id: id }).populate(
      "Assignment"
    );
    res.status(201).json({
      success: true,
      message: "successfully fetched the volunteer assignment data",
      volunteers: volunteerAssignments,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      success: true,
      message: "error while voultneer fetching",
    });
  }
};

module.exports = { getvolunteer, getvolunteerbyid, getVolunteerAssignment };
