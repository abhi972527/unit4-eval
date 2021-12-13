const express = require("express");

const Show = require("../models/shows.model");
const Seats = require("../models/seats.model");

const router = express.Router();


router.post("", async (req, res) => {
    try {
        const show = await Show.create(req.body);
        return res.status(201).send(show);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try{
        const show = await Show.find().lean().exec();
        return res.send(show);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("/:id/seats", async (req, res) => {
    try {
        const show = await Show.findById(req.params.id).lean().exec();
        const seats = await Seats.find().lean().exec();
        return res.status(200).send({ show, seats });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});




module.exports = router;