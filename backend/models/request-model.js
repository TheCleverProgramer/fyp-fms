const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  Schema = mongoose.Schema;

const requestSchema = new Schema(
  {
    from: {type: Schema.Types.ObjectId, required: true, ref: "Student"},
    to: {type: Schema.Types.ObjectId, required: true, ref: "Faculty"},
    approvedByAdvisor: {type: Boolean, default: false},
    approvedByCoordinator: {type: Boolean, default: false},
    fyp: {type: Schema.Types.ObjectId, required: true, ref: "Fyp"}

  },
  { timestamp: true }
);

requestSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Request", requestSchema);
