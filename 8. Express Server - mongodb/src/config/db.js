const mongoose = require("mongoose");


const connect = async () => {
    try {
        url = "mongodb://127.0.0.1:27017/testing";
        await mongoose.connect(url);
    }
    catch (error) {
        console.log(error.message);
    }
}


module.exports = { connect };