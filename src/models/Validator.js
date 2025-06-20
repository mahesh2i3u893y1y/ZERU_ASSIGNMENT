const mongoose = require("mongoose")
const validatorSchema = new mongoose.Schema({
  operatorAddress: String,
  totalDelegatedStake: Number,
  slashHistory: [{
    timestamp: Date,
    amount: Number,
    reason: String
  }],
  status: String
});
module.exports = mongoose.model("Validator", validatorSchema);