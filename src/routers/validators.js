const express = require("express");
const router = express.Router();
const Validator = require("../models/Validator");
router.post("/", async (req, res) => {
  try {
    const validator = new Validator(req.body);
    await validator.save();
    res.status(201).json(validator);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


router.get("/", async (req, res) => {
  try {
    const validators = await Validator.find();
    res.json(validators);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;