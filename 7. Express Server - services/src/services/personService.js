const personModel = require("../models/personModel");


const getPerson = async () => {
    try {
        const person = await personModel.find();

        if (person) {
            return { status: true, data: person };
        }
        else {
            return { status: false, error: "Persons not found" };
        }
    }
    catch (err) {
        return { status: false, error: err.message, errors: err.toString() };
    }
}


module.exports = { getPerson };