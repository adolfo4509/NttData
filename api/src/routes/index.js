const express = require("express");
const clansRoutes = require("./Clans");

const app = express.Router();

require("dotenv").config();

app.use("/clans", clansRoutes);


module.exports = app;
