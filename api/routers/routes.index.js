const testRouter = require("express").Router();
const movieRouter = require("./moviesRouter");
const starsRouter = require("./starsRouter");
const movieStarsRouter = require("./movieStarsRouter");

const testRoute = (req, res) => {
  res.json({ api: `It's working!` });
};

testRouter.get("/", testRoute);

module.exports = server => {
  server.use("/", testRouter);
  server.use("/api/movies", movieRouter);
  server.use("/api/stars", starsRouter);
  server.use("/api/movie-stars", movieStarsRouter);
};
