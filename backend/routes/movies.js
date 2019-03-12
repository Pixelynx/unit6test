import axios from "axios";
import express from "express";
const queries = require("../database/queries/movies.js")
const router = express();

router.get("/movies", queries.fetchAllMovies);
router.get("/movies/byGenre", queries.fetchMovieByGenre);
router.get("/movies/:id", queries.fetchMovieById);

module.exports = router;
