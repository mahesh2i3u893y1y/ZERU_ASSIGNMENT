const mongoose = require("mongoose");
const rewardSchema = new mongoose.Schema({
  wallet: String,
  totalRewards: Number,
  perValidator: [{
    validator: String,
    reward: Number
  }]
});
module.exports = mongoose.model("Reward", rewardSchema);