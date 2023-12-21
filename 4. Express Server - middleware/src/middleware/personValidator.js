const checkpersonExist = (req, res, next) => {
    const { person } = req.query;

    if (person) {
        next();
    }
    else {
        res.status(400).send("person does not Empty");
    }
}


module.exports = { checkpersonExist };