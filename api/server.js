//import any dependencies
const express = require("express");
const middleware = require("./middleware/serverMiddleware");
const routes = require("./routers/routes.index");

//import our routers

//define express()
const server = express();
middleware(server);
routes(server);

//sanity check

//export
module.exports = server;
