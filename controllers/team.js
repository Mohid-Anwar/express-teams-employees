var Team = require("../models/team");

// Show all teams sorted by team name
module.exports.view = function (req, res, next) {
  Team.find()
    .sort({ name: 1 })
    .exec()
    .then((teams) => {
      res.json(teams);
    })
    .catch((err) => {
      return err;
    });
};

// Deletion of a single team by teamId
module.exports.deleteOne = function (req, res, next) {
  Team.findOneAndRemove({ teamid: req.params.teamId })
    .exec()
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      return err;
    });
};

// Not a reuired route but for data entry
// Create a new team
module.exports.create = function (req, res, next) {
  const { name, teamid, description, members } = req.body;
  const newTeam = new Team({
    name,
    teamid,
    description,
    members,
  });

  newTeam
    .save()
    .then((team) => {
      res.json(team);
    })
    .catch((err) => {
      return err;
    });
};
