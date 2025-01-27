const express = require("express");
const { getUserProfile } = require("../controller/userController");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/profile", auth, getUserProfile);

module.exports = router;
