const express = require("express");
const app = express();


const personRoute = require("./src/routes/personRoute");


app.use("/", personRoute);


app.listen(3000);