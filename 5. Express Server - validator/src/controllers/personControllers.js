const { validationResult } = require("express-validator");


const { response, responseFormat } = require("../utils");


const getAllPersons = (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        response(responseFormat("bad request", {}, true, 400), res);
    }


    res.send("person is ALI");
}


module.exports = { getAllPersons };