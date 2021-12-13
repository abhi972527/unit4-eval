const express = require("express");

const Seat = require("../models/seats.model");

const router = express.Router();


router.post("", async (req, res) => {
    try {
        const seat = await Seat.create(req.body);
        return res.status(201).send(seat);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try{
        const seat = await Seat.find().lean().exec();
        return res.send(seat);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});



module.exports = router;