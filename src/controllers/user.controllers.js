const express = require("express");

const User = require("../models/user.model");

const upload = require("../middlewares/upload_pic")

const router = express.Router();


router.post("/", upload.single("userImages"), async (req, res) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            profile_photo_url: req.file.path,
            roles: req.body.roles,
        });
        return res.status(201).send({user});
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.send({ users });
    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
})


module.exports = router;