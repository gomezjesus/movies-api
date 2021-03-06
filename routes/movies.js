const express = require('express');
const MoviesService = require('../services/movies');
const bodyParser = require('body-parser');
function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies/', router);
  app.use(bodyParser.json());

  const moviesService = new MoviesService();

  router.get('/', async function(req, res, next) {
    const { tags } = req.query;
    console.log(tags);
    try {
      const movies = await moviesService.getMovies({ tags });

      res.status(200).json({
        data: movies,
        message: 'movies listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    console.log(movieId);
    try {
      const movies = await moviesService.getMovie({ movieId });

      res.status(200).json({
        data: movies,
        message: 'movies fetched'
      });
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async function(req, res, next) {
    const { body: movie } = req;
    console.log(movie);
    try {
      const moviec = await moviesService.createMovie({ movie });

      res.status(201).json({
        data: movie,
        message: 'movie created'
      });
    } catch (err) {
      next(err);
    }
  });

  router.put('/:movieId', async function(req, res, next) {
    const { body: movie } = req;
    const { movieId } = req.params;
    console.log(req.body);
    console.log(movieId);
    try {
      const movie = await moviesService.updateMovie({ movieId, movie });
      res.status(200).json({
        data: movie,
        message: 'movie updated'
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:movieId', async function(req, res, next) {
    const { movieId } = req.params;
    console.log(movieId);
    try {
      const movie = await moviesService.deleteMovie(movieId);

      res.status(200).json({
        data: movie,
        message: 'movie deleted'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = moviesApi;
