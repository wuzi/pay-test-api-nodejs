import Koa from 'koa';
import general from './general';

const routeLoader = (app: Koa<Koa.DefaultState, Koa.DefaultContext>): void => {
  app.use(general.routes());
};

export default routeLoader;
