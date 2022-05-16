const mongoose = require("mongoose");
const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter a first name"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter a last name"]
    }
}, {timestamps: true});
module.exports.Person = mongoose.model('Person', PersonSchema);