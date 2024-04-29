const express = require("express");
const router = express.Router();
const Prisoner = require("../models/Prisoner");

router.get("/", (req, res) => {
    res.send("get prisoners")
})

router.get("/:id", (req, res) => {
    res.send(`get ${req.params.id} prisoner`)
})

router.delete("/", (req, res) => {
    res.send(`delete ${req.params.id} prisoner`)
})

router.post("/", (req, res) => {
    res.send("add new prisoner")
})

router.put("/:id", (req, res) => {
    res.send(`update ${req.params.id} prisoner`)
})

router.patch("/:id", (req, res) => {
    res.send(`update ${req.params.id} prisoner`)
})
module.exports = router;