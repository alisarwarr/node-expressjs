const { controllerExecuation } = require("../utils");


const { createPerson, getPerson, updatePerson, deletePerson, getOnePerson } = require("../services/personService");


const getAllPersons = async (req, res) => {
    await controllerExecuation(getPerson, req, res);
}

const getSinglePerson = async (req, res) => {
    await controllerExecuation(getOnePerson, req, res);
}

const addPerson = async (req, res) => {
    await controllerExecuation(createPerson, req, res);
}

const modifyPerson = async (req, res) => {
    await controllerExecuation(updatePerson, req, res);
}

const removePerson = async (req, res) => {
    await controllerExecuation(deletePerson, req, res);
}


module.exports = { getAllPersons, getSinglePerson, addPerson, modifyPerson, removePerson };