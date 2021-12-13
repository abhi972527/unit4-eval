const express = require("express");

const Movies = require("../models/movies.model");
const Shows = require("../models/shows.model");

const authenticate = require("../middlewares/authenticate");

const upload = require("../middlewares/upload_poster")

const router = express.Router();


router.post("", authenticate, upload.single("movieImages"), async (req, res) => {
    try {
        const movie = await Movies.create({
            name: req.body.name,
            actors: req.body.actors,
            languages: req.body.languages,
            directors: req.body.directors,
            poster_url: req.file.path,
        });
        return res.status(201).send({movie});
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try {
        const movies = await Movies.find().lean().exec();
        return res.send({ movies });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


router.get("/:id/shows", async (req, res) => {
    try {
        const movies = await Movies.findById(req.params.id).lean().exec();
        // const shows = await Shows.find({ movies_ids: movies._id }).populate("movies_ids").lean().exec();
        const shows = await Shows.find().lean().exec();
        return res.status(200).send({ movies, shows });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


module.exports = router;