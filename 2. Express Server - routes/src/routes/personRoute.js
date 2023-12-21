const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    res.send("person is ALI");
});


module.exports = router;