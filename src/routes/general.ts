import Router from 'koa-router';
import { Context } from 'koa';

const router = new Router();
router.get('/', (ctx: Context): string => ctx.body = 'API Online' );

export default router;
