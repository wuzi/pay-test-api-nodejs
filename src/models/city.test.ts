import City from './city';

describe('city model', (): void => {
  it('should find all city', (): void => {
    const cities = City.findAll();
    expect(Array.isArray(cities)).toBe(true);
  });

  it('should find all city with filters', (): void => {
    const cities = City.findAll({ hasWeather: true, lat: 19.85, lon: -90.533333 });
    expect(Array.isArray(cities)).toBe(true);
  });

  it('should find a city by id', (): void => {
    const cityId = 3992619;
    const city = City.findById(cityId);
    expect(city).toBeTruthy();
  });

  it('should return undefined if can\'t find a city by id', (): void => {
    const cityId = 999777;
    const city = City.findById(cityId);
    expect(city).toBeUndefined();
  });
});
