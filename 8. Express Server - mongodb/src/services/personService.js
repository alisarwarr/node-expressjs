const personModel = require("../models/personModel");


const { responseFormat } = require("../utils");


const getPerson = async () => {
    const persons = await personModel.find();
    return responseFormat("Persons", persons, true, 200);
}


module.exports = { getPerson };