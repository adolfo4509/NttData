const { Router } = require("express");
const axios = require("axios");
const session = require('express-session');
require("dotenv").config();



var config = {
  method: 'get',
  url: 'https://api.clashofclans.com/v1/clans?name=clan',
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA5MGM1NTEzLWU0ZWYtNGI5NS1iYTk0LTczZjI1NWU0NDJlOCIsImlhdCI6MTY0NTczMzU0OSwic3ViIjoiZGV2ZWxvcGVyL2M5ZGFmMDM0LTUyZTEtYzhlMS02YWFhLTBiMDk5ZWE1MDE0ZSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4Ni4xNDYuMTQ5LjE2NCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.HO2xwvkSnRn5dDznuhfLOU_2qT_-VH7zDY59b0jxlSY4hl7ggX47LPOUCOfryupvke-i8XWxSJwhc4l5mDcEtQ',
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
