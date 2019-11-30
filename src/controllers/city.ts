import { Context } from 'koa';
import City from '../models/city';

/**
 * Resourceful controller for interacting with cities
 */
export default class CityController {
  /**
   * Show a list of all cities.
   * GET v1/cities
   *
   * @param {Context} ctx Koa Context
   */
  public static async index(ctx: Context): Promise<void> {
    const { hasWeather } = ctx.request.query;

    const where: Partial<CityFindAllOptions> = {};
    if (hasWeather == 'true') where.hasWeather = true;

    ctx.body = City.findAll(where);
  }

  /**
   * Show a single city by id.
   * GET v1/cities/:id
   *
   * @param {Context} ctx Koa Context
   */
  public static async show(ctx: Context): Promise<void> {
    const city = City.findById(ctx.params.id);
    if (!city) {
      ctx.status = 404;
      ctx.body = { message: 'Cidade não encontrada' };
      return;
    }

    ctx.body = city;
  }
}
