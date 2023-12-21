const express = require("express");
const router = express.Router();


const { getAllPersons } = require("../controllers/personControllers");


const { checkpersonExist } = require("../middleware/personValidator");


router.get("/", checkpersonExist, getAllPersons);


module.exports = router;