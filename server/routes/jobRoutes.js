const express = require("express");
const { getJobs } = require("../controller/jobController");

const router = express.Router();

router.get("/", getJobs);

module.exports = router;
