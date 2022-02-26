const { Router } = require("express");
const axios = require("axios");
const session = require('express-session');
require("dotenv").config();

const { API_KEY } = process.env

var config = {
  method: 'get',
  url: 'https://api.clashofclans.com/v1/clans?name=clan',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Accept': 'application/json'
  }
};

const app = Router();
const getAppInfo = async () => {
  const apiUrl = await axios(config).then(function (response) {
    return response.data;
  });
  return apiUrl;

};
app.get("/clans", async (req, res) => {
  const clansTotal = await getAppInfo();
  res.status(200).json(clansTotal);
});


module.exports = app;
