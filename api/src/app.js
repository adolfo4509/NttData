const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const routes = require("./routes/index.js");
const passport = require('passport');
const cors = require('cors')
const session = require('express-session');
const { API_KEY } = process.env;


const server = express();

server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use(cors({
  header: ("Access-Control-Allow-Origin", "http://localhost:3000"),// update to match the domain you will make the request from
  header: ("Access-Control-Allow-Credentials", "true"),
  header: (
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ),
  methods: ("GET, POST, OPTIONS, PUT, DELETE"),
  header: {
    Accept: 'application/json ',
    'Authorization': `Bearer ${API_KEY}`
  }

}));
server.use(express.json());
server.use("/api", routes);
server.use(morgan("dev"));
server.use(passport.initialize());

server.use(
  session({
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true,
  })
)
server.use(passport.session());

server.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});
// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
