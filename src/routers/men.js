const express = require("express");

const router = new express.Router();

const MensRanking = require("../models/mens")


// we will handle post request 
router.post("/mens", async(req, res) => {
    try{
       const addingMensRecords= new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens)
    }catch(err) {
        res.status(400).send(err);
    };
} )

//  we will HANDLE  GET REQUEST
router.get("/mens", async(req, res) => {
    try{
      const getMens = await MensRanking.find({}).sort({"ranking" : 1});
        res.status(201).send(getMens)
    }catch(err) {
        res.status(400).send(err);
    };
} );

// we will handle get request of individual
router.get("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id
      const getMen = await MensRanking.findById(_id);
        res.status(201).send(getMen)
    }catch(err) {
        res.status(400).send(err);
    };
} );



// we will handle patch req of individual
router.patch("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id
      const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
        new : true
      });
        res.send(getMen)
    }catch(err) {
        res.status(500).send(err);
    };
} );


// we will handle delete req of indi
router.delete("/mens/:id", async(req, res) => {
    try{
        const _id = req.params.id
      const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen)
    }catch(err) {
        res.status(500).send(err);
    };
} ); 

module.exports = router