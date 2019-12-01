/* eslint @typescript-eslint/no-explicit-any: off */
import WeatherController from './weather';

describe('weather controller', (): void => {
  it('should show a list of weathers of a city by id', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 3531732,
      },
    };

    WeatherController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });

  it('should show a list of weathers of a city by id with filters', (): void => {
    const ctx: any = {
      request: {
        query: {
          startDate: '2010-01-01',
          endDate: '2020-01-01',
        },
      },
      params: {
        id: 3531732,
      },
    };

    WeatherController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });

  it('should return status 404 if can\'t find city', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 9977,
      },
    };

    WeatherController.index(ctx);
    expect(ctx.status).toBe(404);
  });

  it('should return an empty array if city doesn\'t have weathers', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 3863379,
      },
    };

    WeatherController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });
});
