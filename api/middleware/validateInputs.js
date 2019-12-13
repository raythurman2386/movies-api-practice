const Movies = require("../../data/models/movies/movies.model");

async function validateNewMovie(req, res, next) {
  if (!req.body.title || !req.body.director || !req.body.metascore) {
    return res
      .status(400)
      .json({ message: "Please provide name, director, and metascore please" });
  }

  const movie = await Movies.findBy({ title: req.body.title });
  // movie is an Array

  if (movie.length > 0) {
    return res.status(400).json({ message: "The movie already exists" });
  }

  next();
}

async function validateUpdateMovie(req, res, next) {
  const movie = await Movies.findBy({ title: req.body.title });

  if (movie.length > 0) {
    res.status(400).json({ message: "Something went wrong" });
  }

  next();
}

module.exports = { validateNewMovie, validateUpdateMovie };
