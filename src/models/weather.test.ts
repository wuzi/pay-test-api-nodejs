import Weather from './weather';

describe('weather model', (): void => {
  it('should find all weathers', (): void => {
    const weathers = Weather.findAll();
    expect(Array.isArray(weathers)).toBe(true);
  });

  it('should find a weather by city id', (): void => {
    const cityId = 3992619;
    const weather = Weather.findByCityId(cityId, {});
    expect(weather).toBeTruthy();
  });

  it('should find a weather by city id with filters', (): void => {
    const cityId = 3992619;
    const weather = Weather.findByCityId(cityId, { startDate: '2010-01-01', endDate: '2020-01-01' });
    expect(weather).toBeTruthy();
  });

  it('should return undefined if can\'t find a weather by city id', (): void => {
    const cityId = 999777;
    const weather = Weather.findByCityId(cityId);
    expect(weather).toBeUndefined();
  });
});
