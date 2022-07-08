const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  Schema = mongoose.Schema;

const activitySchema = new Schema(
  {
    activityName: { type: String, required: true },
    fromDate: {type: Date, required: true},
    toDate: {type: Date, required: true},
    assignedTo: {type: Schema.Types.ObjectId, required: true, ref: "Student"}
  },
  { timestamp: true }
);

activitySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Activity", activitySchema);
