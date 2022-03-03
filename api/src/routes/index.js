const express = require("express");
const clansRoutes = require("./Clans");
const playersRoutes = require("./Players");

const app = express.Router();

require("dotenv").config();

app.use("/clans", clansRoutes);
app.use("/players", playersRoutes);


module.exports = app;
