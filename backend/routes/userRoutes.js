const express = require("express");
const authenticateToken = require("../middlewares/authenticateToken");
const { register, login, getUser } = require("../controller/userController");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(authenticateToken, login);
router.route("/get-user").post(authenticateToken, getUser);

module.exports = router;
