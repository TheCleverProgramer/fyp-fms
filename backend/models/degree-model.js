const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  Schema = mongoose.Schema;

const degreeSchema = new Schema(
  {
    name: { type: String, required: true },
    department: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Department",
    },
    level: {
      type: String,
      enum: ["Under Graduate", "Masters", "PHD"],
      required: true,
    },
  },
  { timestamp: true }
);

degreeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Degree", degreeSchema);
