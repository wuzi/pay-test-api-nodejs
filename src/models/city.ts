import cities from '../data/city_list.json';
import weathers from '../data/weather_list.json';
import Weather from './weather.js';

export default class City {
  public id!: number;
  public coord!: CityCoord;
  public country!: string;
  public geoname!: CityGeoName;
  public name!: string;
  public stat!: CityStat;
  public stations?: CityStation[];
  public zoom!: number;
  public weather?: Weather;

  public static findAll(where?: Partial<CityFindAllOptions>): City[] {
    if (where && where.hasWeather) {
      // this filter would be made in database if we were using one
      const result: City[] = [];
      for (const city of cities) {
        const weather = weathers.find(w => w.cityId == city.id);
        if (!weather) continue;

        result.push(city);
      }
      return result;
    }
    return cities;
  }

  public static findById(id: number): City | undefined {
    const city = cities.find(c => c.id == id);
    if (!city) return undefined;

    const weather = Weather.findByCityId(id);
    return { ...city, weather };
  }
}
