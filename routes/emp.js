var express = require("express");
var Employee = require("../models/emp");
var router = express.Router();
var empCont = require("../controllers/emp");

router.get("/", empCont.viewAll);
router.get("/:employeeId", empCont.viewOne);
router.put("/:employeeId", empCont.updateOne);
router.post("/", empCont.create); // Extra Route for creating Emp
module.exports = router;
