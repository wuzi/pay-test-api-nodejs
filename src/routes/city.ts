import Router from 'koa-router';
import CityController from '../controllers/city';

const router = new Router();
router.prefix('/v1/cities');

/**
 * Show a list of all cities.
 * GET v1/cities
 */
router.get('/', CityController.index);

/**
 * Show a single city by id.
 * GET v1/cities/:id
 */
router.get('/:id', CityController.show);

export default router;
