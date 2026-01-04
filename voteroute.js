const express = require("express");
const Vote = require("../models/Vote");

const router = express.Router();

router.post("/", async (req, res) => {
  const vote = new Vote({ option: req.body.option });
  await vote.save();
  res.json({ message: "Vote recorded" });
});

router.get("/", async (req, res) => {
  const votes = await Vote.find();
  res.json(votes);
});

module.exports = router;
