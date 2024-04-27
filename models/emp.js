var mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  empid: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", employeeSchema);
