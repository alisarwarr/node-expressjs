const { controllerExecuation } = require("../utils");


const { getPerson } = require("../services/personService");


const getAllPersons = async (req, res) => {
    await controllerExecuation(getPerson, req, res);
}


module.exports = { getAllPersons };