const personRoute = require("./personRoute");


const express = require("express");
const router = express.Router();


router.use("/person", personRoute);


module.exports = router;