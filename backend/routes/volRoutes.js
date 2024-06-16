const express = require("express");
const {
  getvolunteer,
  getvolunteerbyid,
  getVolunteerAssignment,
  getVolunteerAttendanceDates,
} = require("../controller/volunteerController");

const router = express.Router();

router.get("/", getvolunteer);

router.get("/:id", getvolunteerbyid);

router.get("/:id", getVolunteerAssignment);
router.get("/getVolDates/:id", getVolunteerAttendanceDates);

module.exports = router;
