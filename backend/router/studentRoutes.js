const express = require("express"),
  router = express.Router(),
  studentController = require("../controllers/studentController.js"),
  activityController = require("../controllers/activityController.js"),
  degreeController = require("../controllers/degreeController.js");

router.route("/getStudents").get(studentController.getStudents);
router.route("/addActivity").post(activityController.addActivity);
router.route("/getDegreeById/:degreeId").get(degreeController.getDegreeById);

module.exports = router;
