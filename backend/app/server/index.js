const express = require("express");
const routes = require("../routes/index.js");

const server = express();

routes(server);

module.exports = server;
