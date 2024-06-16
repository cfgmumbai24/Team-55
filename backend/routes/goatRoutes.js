const express = require("express");
const { getgoatinfo, creategoatinfo, mortalityCount }  = require("../controller/goatController");

const router = express.Router();

router.get("/",getgoatinfo);


router.post("/",creategoatinfo);

router.get("/mortality",mortalityCount);

module.exports = router;
