/* eslint @typescript-eslint/no-explicit-any: off */
import CityController from './city';

describe('city controller', (): void => {
  it('should show a list of all cities', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
    };

    CityController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });

  it('should show a list of all cities with filters', (): void => {
    const ctx: any = {
      request: {
        query: {
          hasWeather: 'true',
          lat: 19.85,
          lon: -90.53333,
        },
      },
    };

    CityController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });

  it('should show a single city by id', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 3531732,
      },
    };

    CityController.show(ctx);
    expect(ctx.body.id).toBe(3531732);
  });

  it('should show return 404 if can\'t find city', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 979799,
      },
    };

    CityController.show(ctx);
    expect(ctx.status).toBe(404);
  });
});
