const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema;


const departmentSchema = new Schema({
    name: {type: String,  required: true}
}, {timestamp: true});

departmentSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Department", departmentSchema);    