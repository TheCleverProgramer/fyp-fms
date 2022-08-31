const mongoose = require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator'),
      Schema = mongoose.Schema;

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

const fypSchema = new Schema({
    name: {type: String, required: true},
    isApproved: {type: Boolean, required: true},
    members: [{type: Schema.Types.ObjectId, required: true, ref:'Student'}],
    advisor: {type: Schema.Types.ObjectId, required: true, ref:'Faculty'},
    co_advisor: {type: Schema.Types.ObjectId,  ref:'Faculty'},
    startDate: {type: Date, default: date},
    endDate: {type: Date}
}, {timestamp: true});

fypSchema.plugin(uniqueValidator);

module.exports = mongoose.model("FYP", fypSchema);    