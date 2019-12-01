import { Context } from 'koa';
import City from '../models/city';
import Weather from '../models/weather';

/**
 * Resourceful controller for interacting with weathers
 */
export default class WeatherController {
  /**
   * Show a list of all weathers of a city.
   * GET v1/cities/:id/weathers
   *
   * @param {Context} ctx Koa Context
   */
  public static async index(ctx: Context): Promise<void> {
    const { startDate, endDate } = ctx.request.query;

    const city = City.findById(ctx.params.id);
    if (!city) {
      ctx.status = 404;
      ctx.body = { message: 'Cidade não encontrada' };
      return;
    }

    const weather = Weather.findByCityId(ctx.params.id, { startDate, endDate });
    ctx.body = weather ? weather.data : [];
  }
}
