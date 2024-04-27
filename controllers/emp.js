var Employee = require("../models/emp");
const util = require("util");

// Show all emps, (Sorted by Last Name )
module.exports.viewAll = function (req, res, next) {
  Employee.find()
    .sort({ lastname: 1 })
    .exec()
    .then((employees) => {
      res.send(employees);
    })
    .catch((err) => {
      return err;
    });
};

// returns information for a single employee, whose employee ID is passed through the employeeId parameter
module.exports.viewOne = function (req, res, next) {
  Employee.findOne({ empid: req.params.employeeId })
    .exec()
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      return err;
    });
};

// used to update an existing employee by employeeId
module.exports.updateOne = function (req, res, next) {
  Employee.findOneAndUpdate(
    { empid: req.params.employeeId },
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      designation: req.body.designation,
    },
    { new: true }
  )
    .exec()
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      return err;
    });
};

// Create a new employee
// Not a reuired route but for data entry
module.exports.create = function (req, res, next) {
  const { firstname, lastname, empid, designation } = req.body;
  const newEmployee = new Employee({
    firstname,
    lastname,
    empid,
    designation,
  });

  newEmployee
    .save()
    .then((employee) => {
      res.send(employee);
    })
    .catch((err) => {
      res.send(err);
    });
};
