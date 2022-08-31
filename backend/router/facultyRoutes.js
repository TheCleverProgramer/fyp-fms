const express = require("express"),
  router = express.Router(),
  facultyController = require("../controllers/facultyController.js");

router.route("/getFaculty").get(facultyController.getFaculty);
router.route("/getFacultyById/:f_id").get(facultyController.getFacultyById);
router.route("/loginfaculty/:email/:pwd").post(facultyController.loginFaculty);

module.exports = router;
