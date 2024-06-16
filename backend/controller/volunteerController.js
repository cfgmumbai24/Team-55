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
    const { id } = req.params; // Using req.query to get id from query parameters
    const user = await Volunteer.findById(id); // Using findById to find volunteer by ID

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Successfully fetched the volunteer data",
      volunteer: user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error while fetching volunteer",
    });
  }
};
const getVolunteerAssignment = async (req, res) => {
  try {
    const { id } = req.params;
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
