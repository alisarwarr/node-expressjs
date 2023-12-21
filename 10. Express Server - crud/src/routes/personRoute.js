const express = require("express");
const router = express.Router();


const { getAllPersons, getSinglePerson, addPerson, modifyPerson, removePerson } = require("../controllers/personControllers");


router.get("/", getAllPersons);
router.get("/:id", getSinglePerson);
router.post("/", addPerson);
router.put("/:id", modifyPerson);
router.delete("/:id", removePerson);


module.exports = router;