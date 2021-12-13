const mongoose = require("mongoose");


const moviesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    actors: [{ type: String, required: true }],
    languages: [{ type: String }],
    directors: [{ type: String, required: true }],
    poster_url: [{ type: String }],
}, {
    versionKey: false,
    timestamps: true,
})


module.exports = mongoose.model("movies", moviesSchema);
