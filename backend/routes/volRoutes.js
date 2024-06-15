const express = require("express");
const {
  getvolunteer,
  getvolunteerbyid,
  getVolunteerAssignment
} = require("../controller/volunteerController");

const router = express.Router();

router.get("/", getvolunteer);

router.get("/:id", getvolunteerbyid);

router.get("/:id", getVolunteerAssignment);

module.exports = router;
