const { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Student = require("../models/student-model"),
  bcrypt = require("bcrypt");

const getStudents = async (req, res, next) => {
  let students;
  //fetching record
  try {
    students = await Student.find();
  } catch (err) {
    const error = new HttpError("Failed to get students. \n" + err, 500);
    return next(error);
  }
  //checking if students exists
  if (!students) {
    const error = new HttpError("No students found with email.", 422);
    return next(error);
  }
  //sending response
  res.status(201).json(students);
};

const loginStudent = async (req, res, next) => {
  const {email, pwd} = req.params;
  let student;
  //fetching record
  try {
    student = await Student.findOne({email: email});
  } catch (err) {
    const error = new HttpError("Failed to get student. " + err, 500);
    return next(error);
  }
  //checking if student exists
  if (!student) {
    const error = new HttpError("No student found with this email.", 422);
    return next(error);
  }
  //checking password
  bcrypt.compare(pwd, student.password, function(err, result){
    if(result == true){
      //sending response
      res.status(201).json(student);
    }
    //sending error
    const error = new HttpError(`Password for ${email} did not macth.`, 422);
    return next(error);
  });
  
};


module.exports = {
  getStudents,
  loginStudent,
};
