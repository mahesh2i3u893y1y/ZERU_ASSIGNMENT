const mongoose = require("mongoose");
const restakerSchema = new mongoose.Schema({
  user: String,
  amountRestaked: Number,
  validator: String
});
module.exports = mongoose.model("Restaker", restakerSchema);