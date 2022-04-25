const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema;


const facultySchema = new Schema({
    name: {type: String,  required: true},
    gender: {type: String, enum:["male", "female"], required: true},
    dob: {type: Date,  required: true},
    mobile: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, minlength: 6,required: true},
    graduation: {
        degree: {type: Schema.Types.ObjectId, required: true, ref:'Degree'}
    },
    masters: {
        degree: {type: Schema.Types.ObjectId, ref:'Degree'}
    },
    phd: {
        degree: {type: Schema.Types.ObjectId, ref:'Degree'}
    },
    specializations: [{type: String}]
}, {timestamp: true});

facultySchema.plugin(uniqueValidator);

module.exports = mongoose.model("Faculty", facultySchema);    