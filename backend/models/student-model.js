const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dob: { type: Date, required: true },
    mobile: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, minlength: 6, required: true },
    graduation: { type: Schema.Types.ObjectId, required: true, ref: "degree" },
    masters: { type: Schema.Types.ObjectId, ref: "degree" },
    phd: { type: Schema.Types.ObjectId, ref: "degree" },
    semester: { type: Number, required: true },
  },
  { timestamp: true }
);

studentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Student", studentSchema);
