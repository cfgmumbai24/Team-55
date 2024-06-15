const express = require("express");
const { getAllBeneficiaries, getBeneficiary, createBeneficiary, deleteBeneficiary, updateBeneficiary } = require("../controller/beneficiaryController");

const router = express.Router();

router.get("/",getAllBeneficiaries);

router.get("/:id",getBeneficiary);

router.post("/",createBeneficiary);

router.delete("/:id",deleteBeneficiary);

router.patch("/:id",updateBeneficiary);

module.exports = router;
