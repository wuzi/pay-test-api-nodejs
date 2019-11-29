import Router from 'koa-router';
import { Context } from 'koa';
import GeneralController from '../controllers/general';

const router = new Router();
router.get('/swagger.json', GeneralController.swagger);
router.get('/', (ctx: Context): string => ctx.body = 'API Online' );

export default router;
