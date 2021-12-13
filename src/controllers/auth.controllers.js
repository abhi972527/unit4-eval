require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
    return jwt.sign({ user: user }, process.env.JWT_ACCESS_KEY);
};

const register = async (req, res) => {
    let user;
    try {

        user = await User.findOne({ email: req.body.email }).lean().exec();

        if (user)
            return res.status(400).json({ status: "failed", message: "User already exist" });


        user = await User.create(req.body);

        const token = newToken(user)


        return res.status(201).send({ user, token });

    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    }


};


const login = async (req, res) => {
    let user;
    try {

        user = await User.findOne({ email: req.body.email });

        if (!user)
            return res.status(400).json({
                status: "failed",
                message: "Provide correct email and password",
            });


        const match = await user.checkPassword(req.body.password);

        if (!match)
            return res.status(400).json({
                status: "failed",
                message: "Provide correct email and password",
            });


        const token = newToken(user)


        return res.status(201).json({ user, token });
    } catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
    };
};

module.exports = { register, login, newToken };