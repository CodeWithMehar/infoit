let express = require("express");
const { web } = require("./router/website");
let route = express();
route.use(web)
module.exports = {route}