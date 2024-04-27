var mongoose = require("mongoose");

var teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  teamid: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  members: [
    {
      type: String,
      required: true,
    },
  ],
});

module.exports = mongoose.model("Team", teamSchema);
