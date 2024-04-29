const mongoose = require("mongoose");

const prisonerSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    imageUrl: String
})

const Prisoner = mongoose.model("Prisoner", prisonerSchema, "Prisoner");

module.exports = Prisoner;