const express = require("express");

const Screen = require("../models/screens.model");

const router = express.Router();


router.post("", async (req, res) => {
    try {
        const screen = await Screen.create(req.body);
        return res.status(201).send(screen);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try{
        const screen = await Screen.find().lean().exec();
        return res.send(screen);
    } catch (e) {
        return res.send(500).json({ message: e.message, status: "Failed" });
    }
});



module.exports = router;
