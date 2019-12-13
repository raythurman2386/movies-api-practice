const movieRouter = require("express").Router();
const Movies = require("../../data/models/movies/movies.model");
const validateInputs = require("../middleware/validateInputs");

async function getAllMovie(req, res) {
  try {
    const movies = await Movies.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getMovieById(req, res) {
  try {
    const movie = await Movies.findBy({ id: req.params.id });
    res.json(movie[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function addNewMovie(req, res) {
  try {
    const movie = await Movies.addMovie(req.body);
    res.status(201).json(movie[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function updateMovie(req, res) {
  try {
    const movie = await Movies.updateMovie(req.params.id, req.body);
    res.json(movie[0]);
  } catch (error) {
    res.status(500).json(error);
  }
}

async function deleteMovie(req, res) {
  try {
    const count = await Movies.deleteMovie(req.params.id);
    res.json(count);
  } catch (error) {
    res.status(500).json(error);
  }
}

movieRouter
  .get("/", getAllMovie)
  .get("/:id", getMovieById)
  .post("/", validateInputs.validateNewMovie, addNewMovie)
  .put("/:id", validateInputs.validateUpdateMovie, updateMovie)
  .delete("/:id", deleteMovie);

module.exports = movieRouter;
