import Router from 'koa-router';
import WeatherController from '../controllers/weather';

const router = new Router();
router.prefix('/v1/cities');

/**
 * Show a list of weathers of a single city.
 * GET v1/cities/:id/weathers
 */
router.get('/:id/weathers', WeatherController.index);

export default router;
