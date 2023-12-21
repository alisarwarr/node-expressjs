const express = require("express");
const router = express.Router();


const { getAllPersons } = require("../controllers/personControllers");


router.get("/", getAllPersons);


module.exports = router;