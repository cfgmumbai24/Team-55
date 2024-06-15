const express = require("express");
const {
    getAllAssignments, getMonthlyAssignments
} = require("../controller/assignmentController");

const router = express.Router();

router.get("/", getAllAssignments);

router.get("/monthly", getMonthlyAssignments);

module.exports = router;
