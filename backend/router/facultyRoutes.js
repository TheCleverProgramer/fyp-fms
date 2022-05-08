const express = require("express"),
  router = express.Router(),
  facultyController = require("../controllers/facultyController.js");

router.route("/getFaculty").get(facultyController.getFaculty);

module.exports = router;
