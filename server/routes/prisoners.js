const express = require("express");
const router = express.Router();
const Prisoner = require("../models/Prisoner");

router.use(express.urlencoded({ extended: true }));

router.get("/", async (req, res) => {
    try{
        const prisonersToReturn = await Prisoner.find({})
        res.json(prisonersToReturn)
        
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.get("/:id", async (req, res) => {
    try{
        const prisonerToReturn = await Prisoner.find({_id: req.params.id})
        res.json(prisonersToReturn)
        
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.delete("/:id", async (req, res)=>{
    const prisonerId = req.params.id
    try{
        const prisonerToDelete = await Prisoner.findByIdAndDelete(prisonerId)
        if(!prisonerToDelete){
            return res.status(404).json({message:"Prisoner not found"})
        }
        res.json({message:"Prisoner has been deleted."})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

router.post("/", async (req, res) => {
    try {
        const newPrisoner = new Prisoner(req.body)
        await newPrisoner.save()
        res.status(201).json(newPrisoner)

    } catch(err){
        console.log(`post error ${err.message}`)
        res.status(400).json(err)
    }
})

router.put("/:id", (req, res) => {
    res.send(`update ${req.params.id} prisoner`)
})

router.patch("/:id", async (req, res) => {
    try {
        const prisonerToUpdate = await Prisoner.findById(req.params.id);

        if (!prisonerToUpdate) {
            return res.status(404).json({ message: "Prisoner not found" });
        }

        Object.keys(req.body).forEach(key => {
            if (req.body[key] !== undefined && req.body[key] !== '') {
                prisonerToUpdate[key] = req.body[key];
            }
        });

        const updatedPrisoner = await prisonerToUpdate.save();

        res.json(updatedPrisoner);
    } catch (err) {
        console.log(`Patch error: ${err.message}`);
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;