const express = require("express");

const {register, login} = require("./controllers/auth.controllers");
const userController = require("./controllers/user.controllers");
const moviesController = require("./controllers/movies.controller");
const theatresController = require("./controllers/theatres.controller");
const screenController = require("./controllers/screens.controller");
const showsController = require("./controllers/shows.controller");
const seatsController = require("./controllers/seats.controller");





const app = express();

app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/user", userController);
app.use("/movies", moviesController);
app.use("/theatres", theatresController);
app.use("/screens", screenController);
app.use("/shows", showsController);
app.use("/seats", seatsController);


module.exports = app;


