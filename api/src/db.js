require("dotenv").config();
const { Sequelize } = require("sequelize");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = process.env.NODE_ENV === "production"
  ? new Sequelize({
    database: DB_NAME,
    dialect: "postgres",
    host: DB_HOST,
    port: 5432,
    username: DB_USER,
    password: DB_PASSWORD,
    pool: {
      max: 3,
      min: 1,
      idle: 10000,
    },

  })
  : new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`,
    { logging: false, native: false }
  );



module.exports = {

  conn: sequelize, // para importart la conexión { conn } = require('./db.js');

};
