import Koa from 'koa';
import city from './city';
import weather from './weather';
import general from './general';

const routeLoader = (app: Koa<Koa.DefaultState, Koa.DefaultContext>): void => {
  app.use(city.routes());
  app.use(weather.routes());
  app.use(general.routes());
};

export default routeLoader;
