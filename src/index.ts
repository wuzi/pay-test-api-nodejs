import Koa from 'koa';
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import dotenv from 'dotenv';
import logger from './utils/logger';
import routeLoader from './routes';
dotenv.config();

const app = new Koa();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser());
routeLoader(app);

app.listen(port, (): void => logger('index', `Server started at http://localhost:${port}`, 'info'));
