const { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Faculty = require("../models/faculty-model.js"),
  Degree = require("../models/degree-model.js");

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

const getFacultyById = async (req, res, next) => {
  let faculty;
  const {f_id} = req.params;
  //fetching record
  try {
    faculty = await Faculty.findOne({_id: f_id});
  } catch (err) {
    const error = new HttpError("Failed to get faculty list. \n" + err, 500);
    return next(error);
  }
  //checking if faculty exists
  if (!faculty) {
    const error = new HttpError("No faculty found.", 422);
    return next(error);
  }
  //fetching degree
  let {name, email, specializations, office, image, designation, graduation, masters, phd} = faculty;
  let graduateDegree, mastersDegree, phdDegree;
  try {
    graduateDegree = await Degree.findOne({_id: graduation});
    mastersDegree = await Degree.findOne({_id: masters});
    phdDegree = await Degree.findOne({_id: phd});

    console.log(graduateDegree.name);

    //updating faculty
    // faculty['graduation'] = graduateDegree.name;
    // faculty['masters'] = mastersDegree.name;
    // faculty['phd'] = phdDegree.name;

  } catch (err) {
    const error = new HttpError("Failed to get degree list. \n" + err, 500);
    return next(error);
  }
  //sending response


  res.status(200).json({
    name: name, 
    email: email,
    specializations: specializations, 
    office: office, 
    image: image,
    designation: designation, 
    graduation: graduateDegree.name, 
    masters: mastersDegree.name, 
    phd: phdDegree.name});
};

module.exports = {
  getFaculty,
  getFacultyById
};
