const { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Student = require("../models/student-model");

const getStudents = async (req, res, next) => {
  let students;
  //fetching record
  try {
    students = await Student.find({});
  } catch (err) {
    const error = new HttpError("Failed to get students list. \n" + err, 500);
    return next(error);
  }
  //checking if students exists
  if (!students) {
    const error = new HttpError("No students found.", 422);
    return next(error);
  }
  //sending response
  res.status(201).json(students);
};

module.exports = {
  getStudents,
};
