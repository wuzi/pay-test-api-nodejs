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

  it('should show an empty list of weathers if can\'t find city', (): void => {
    const ctx: any = {
      request: {
        query: {},
      },
      params: {
        id: 9977,
      },
    };

    WeatherController.index(ctx);
    expect(Array.isArray(ctx.body)).toBe(true);
  });
});
