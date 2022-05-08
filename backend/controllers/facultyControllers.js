const { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Faculty = require("../models/faculty-model");

const getFaculty = async (req, res, next) => {
  let faculty;
  //fetching record
  try {
    faculty = await Faculty.find({});
  } catch (err) {
    const error = new HttpError("Failed to get faculty list. \n" + err, 500);
    return next(error);
  }
  //checking if faculty exists
  if (!faculty) {
    const error = new HttpError("No faculty found.", 422);
    return next(error);
  }
  //sending response
  res.status(201).json(faculty);
};

module.exports = {
  getFaculty,
};
