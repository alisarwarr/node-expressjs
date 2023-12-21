const personModel = require("../models/personModel");


const { responseFormat } = require("../utils");


const getPerson = async () => {
    const query = await personModel.find();
    return responseFormat("Persons", query, true, 200);
}

const deletePerson = async (req) => {
    const id = req.params.id;
    const query = await personModel.deleteOne({ "_id" : id });
    return responseFormat("Persons", query, true, 200);
}

const getOnePerson = async (req) => {
    const id = req.params.id;
    const query = await personModel.findById(id);
    return responseFormat("Persons", query, true, 200);
}

const createPerson = async (req) => {
    const { value } = req.body;
    const newPerson = new personModel({ value });
    const query = await newPerson.save();
    return responseFormat("Persons", query, true, 200);
}

const updatePerson = async (req) => {
    const id = req.params.id;
    const { value } = req.body;
    const query = await personModel.findByIdAndUpdate(
        id,
        { value },
        { new: true } // Return the updated document
    );
    return responseFormat("Persons", query, true, 200);
}


module.exports = { getPerson, deletePerson, getOnePerson, createPerson, updatePerson };