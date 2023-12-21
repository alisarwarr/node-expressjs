const { getPerson } = require("../services/personService");


const getAllPersons = async (req, res) => {
    res.json(await getPerson(req));
}


module.exports = { getAllPersons };