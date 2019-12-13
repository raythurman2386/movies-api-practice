const testRouter = require("express").Router();
const movieRouter = require("./moviesRouter");

const testRoute = (req, res) => {
  res.json({ api: `It's working!` });
};

testRouter.get("/", testRoute);

module.exports = server => {
  server.use("/", testRouter);
  server.use("/movies", movieRouter);
};
