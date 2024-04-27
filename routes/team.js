var express = require("express");
var Team = require("../models/team");
var router = express.Router();
var teamCont = require("../controllers/team");

router.get("/", teamCont.view);
router.delete("/:teamId", teamCont.deleteOne);
router.post("/", teamCont.create); // Extra Route for creating Team
module.exports = router;
