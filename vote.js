const mongoose = require("mongoose");

const voteSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Vote", voteSchema);
