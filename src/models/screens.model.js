const mongoose = require("mongoose");


const screensSchema = new mongoose.Schema({
    name: { type: String, required: true },
    theatre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "theatres",
        required: true,
    },
}, {
    versionKey: false,
    timestamps: true,
})


module.exports = mongoose.model("screens", screensSchema); // users
