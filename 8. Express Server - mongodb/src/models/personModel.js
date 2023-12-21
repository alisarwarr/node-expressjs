const mongoose = require("mongoose");


const personSchema = mongoose.Schema({
    value: {
        type: String,
        required: true,
    } 
}, {
    timestamps: true,
})


const personModel = mongoose.model("persons", personSchema);


module.exports = personModel;