const mongoose = require("mongoose");


const theatresSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true,
})


module.exports = mongoose.model("theatres", theatresSchema); // users
