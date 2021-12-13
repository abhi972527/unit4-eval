const mongoose = require("mongoose");


const seatsSchema = new mongoose.Schema({
    show: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "shows",
        required: true,
     },
}, {
    versionKey: false,
    timestamps: true,
})





module.exports = mongoose.model("seats", seatsSchema); // users
