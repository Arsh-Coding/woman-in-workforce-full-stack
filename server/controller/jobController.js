const JobData = require("../models/jobModel");

const getJobs = async (req, res) => {
  try {
    const jobs = await JobData.find();
    res.json(jobs);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { getJobs };
