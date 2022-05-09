const express = require("express"),
  router = express.Router(),
  studentController = require("../controllers/studentController.js");

router.route("/getStudents").get(studentController.getStudents);

module.exports = router;
