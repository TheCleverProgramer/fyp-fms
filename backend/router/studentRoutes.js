const express = require("express"),
  router = express.Router(),
  studentController = require("../controllers/studentController.js"),
  activityController = require("../controllers/activityController.js");

router.route("/getStudents").get(studentController.getStudents);
router.route("/addActivity").post(activityController.addActivity);

module.exports = router;
