const express = require("express");
const router = express.Router();
const Restaker = require("../models/Restaker");


// Add this below router.get(...)
router.post("/", async (req, res) => {
  try {
    const { user, amountRestaked, validator } = req.body;
    const restaker = new Restaker({ user, amountRestaked, validator });
    await restaker.save();
    res.status(201).json(restaker);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const restakers = await Restaker.find();
    res.json(restakers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;