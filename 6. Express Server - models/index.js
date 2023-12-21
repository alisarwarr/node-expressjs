const express = require("express");
const app = express();


const routes = require("./src/routes");


const { connect } = require("./src/config/db.js");


app.use(routes);


const PORT = process.env.port || 3000;
app.listen(PORT, async () => {
    await connect();
    console.log("Server running on PORT " + PORT);
});