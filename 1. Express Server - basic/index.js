const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send("person is ALI");
});


app.listen(3000);