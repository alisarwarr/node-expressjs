const { body } = require("express-validator");


const checkpersonExist = [
    body("person", "person does not Empty").not().isEmpty(),
]


module.exports = { checkpersonExist };