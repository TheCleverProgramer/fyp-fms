const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  Schema = mongoose.Schema;

const facultySchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    dob: { type: Date, required: true },
    mobile: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, minlength: 6, required: true },
    graduation: { type: Schema.Types.ObjectId, ref: "Degree", required: true },
    masters: { type: Schema.Types.ObjectId, ref: "Degree" },
    phd: { type: Schema.Types.ObjectId, ref: "Degree" },

    specializations: [{ type: String }],
    designation: [{type: String}],
    office: { type: String },
    image: {type: String},
  },
  { timestamp: true }
);

facultySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Faculty", facultySchema);
