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
    let [...result] = cities;

    if (where) {
      // this filter would be made in database if we were using one
      if (where.hasWeather) {
        for (let i = result.length - 1; i >= 0; i--) {
          const weather = weathers.find(w => w.cityId == result[i].id);
          if (!weather) result.splice(i, 1);
        }
      }

      if (where.lat) {
        result = result.filter(r => r.coord.lat == where.lat);
      }

      if (where.lon) {
        result = result.filter(r => r.coord.lon == where.lon);
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
