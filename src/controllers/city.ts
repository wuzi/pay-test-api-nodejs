import { BaseContext } from 'koa';
import City from '../models/city';

/**
 * Resourceful controller for interacting with cities
 */
export default class CityController {
  /**
   * Show a list of all cities.
   * GET v1/cities
   *
   * @param {BaseContext} ctx Koa Context
   */
  public static async index(ctx: BaseContext): Promise<void> {
    ctx.body = City.findAll();
  }
}
