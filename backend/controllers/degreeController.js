const { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Degree = require("../models/degree-model.js");

const getDegreeById = async (req, res, next) => {
  const {degreeId} = req.params;
  let degree;
  //fetching record
  try {
    degree = await Degree.findOne({_id: degreeId});
  } catch (err) {
    const error = new HttpError("Failed to get faculty list. \n" + err, 500);
    return next(error);
  }
  //checking if faculty exists
  if (!degree) {
    const error = new HttpError("No faculty found.", 422);
    return next(error);
  }
  //sending response
  res.status(200).json(degree);
};

module.exports = {
    getDegreeById
};
