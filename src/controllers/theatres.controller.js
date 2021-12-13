const express = require("express");

const Theatre = require("../models/theatres.model");
const Seats = require("../models/seats.model");
const Show = require("../models/shows.model");


const router = express.Router();


router.post("", async (req, res) => {
    try {
        const theatre = await Theatre.create(req.body);
        return res.status(201).send(theatre);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try{
        const theatre = await Theatre.find().lean().exec();
        return res.send(theatre);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("/:id/shows/seats", async (req, res) => {
    try {
        const theatre = await Theatre.findById(req.params.id).lean().exec();
        const show = await Show.find().lean().exec();
        const seats = await Seats.find().lean().exec();
        return res.status(200).send({ theatre, show, seats });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});



module.exports = router;
