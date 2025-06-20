const express = require("express");
const router = express.Router();
const Reward = require("../models/Reward");

router.post("/", async (req, res) => {
  try {
    const reward = new Reward(req.body);
    await reward.save();
    res.status(201).json(reward);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/:address", async (req, res) => {
  try {
    const reward = await Reward.findOne({ wallet: req.params.address });
    if (!reward) return res.status(404).json({ message: "No rewards found." });
    res.json(reward);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;