const
  { validationResult } = require("express-validator"),
  HttpError = require("../utils/httpError.js"),
  Faculty = require("../models/faculty-model.js"),
  Activity = require("../models/activity-model.js");

const addActivity = async (req, res, next) => {
    const {activityName, fromDate, toDate, assignedTo} = req.body;
    try{
        const activity = new Activity({
            activityName: activityName,
            fromDate: fromDate,
            toDate: toDate,
            assignedTo: assignedTo
        });
        activity.save();
    }catch(err){
        const error = new HttpError("Failed to add activity. Internal server error occured.\n" + err, 500);
        return next(error);
    }
    return res.status(201).send();
}

module.exports = {
    addActivity
};
