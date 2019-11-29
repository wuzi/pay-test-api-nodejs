import Router from 'koa-router';
import CityController from '../controllers/city';

const router = new Router();
router.prefix('/v1/cities');

/**
 * Show a list of all cities.
 * GET v1/cities
 */
router.get('/', CityController.index);

export default router;
