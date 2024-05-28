const mongoose = require("mongoose");

const prisonerSchema = new mongoose.Schema({
    name: String,
    punishment: String
})

const Prisoner = mongoose.model("Prisoner", prisonerSchema, "Prisoner");

module.exports = Prisoner;