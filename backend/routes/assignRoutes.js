const express = require("express");
const {
    getAllAssignments, getMonthlyAssignments
} = require("../controller/assignmentController");

const router = express.Router();

router.get("/", getAllAssignments);

router.get("/month", getMonthlyAssignments);

module.exports = router;
