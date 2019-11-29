import cities from '../data/city_list.json';

export default class City {
  public id!: number;
  public coord!: CityCoord;
  public country!: string;
  public geoname!: CityGeoName;
  public name!: string;
  public stat!: CityStat;
  public stations?: CityStation[];
  public zoom!: number;

  public static findAll(): City[] {
    return cities;
  }
}
