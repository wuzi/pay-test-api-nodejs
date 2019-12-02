import { Context } from 'koa';
import { validateAll } from 'indicative/validator';

/**
 * Resourceful validator for validating weathers
 */
class WeatherValidator {
  /**
   * Show a list of weathers of a single city.
   * GET v1/cities/:id/weathers
   * 
   * @param {Context} ctx - Koa Context
   */
  public static async index(ctx: Context, next: () => Promise<unknown>): Promise<void> {
    try {
      const rules = {
        startDate: 'date',
        endDate: 'date',
      };

      const messages = {
        date: (field: string): string => `${field} deve ser uma data válida`,
      };

      await validateAll(ctx.request.query, rules, messages);
      await next();
    }
    catch (err) {
      ctx.status = 400;
      ctx.body = err;
    }
  }
}

export default WeatherValidator;
