import { Context } from 'koa';
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
    const weather = Weather.findByCityId(ctx.params.id);
    if (!weather) {
      ctx.body = [];
      return;
    }

    ctx.body = weather.data;
  }
}
