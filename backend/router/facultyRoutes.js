const express = require("express"),
  router = express.Router(),
  facultyController = require("../controllers/facultyControllers.js");

router.route("/getFaculty").get(facultyController.getFaculty);

module.exports = router;
