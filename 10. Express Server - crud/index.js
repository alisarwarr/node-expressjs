const express = require("express");
const app = express();


const routes = require("./src/routes");


const { connect } = require("./src/config/db.js");


const cors = require("cors");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.use(routes);


const PORT = process.env.port || 3000;
app.listen(PORT, async () => {
    await connect();
    console.log("Server running on PORT " + PORT);
});