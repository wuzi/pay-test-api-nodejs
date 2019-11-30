import cities from '../data/city_list.json';
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

  public static findAll(): City[] {
    return cities;
  }

  public static findById(id: number): City | undefined {
    const city = cities.find(c => c.id == id);
    if (!city) return undefined;

    const weather = Weather.findByCityId(id);
    return { ...city, weather };
  }
}
