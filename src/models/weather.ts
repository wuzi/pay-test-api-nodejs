import weathers from '../data/weather_list.json';

export default class Weather {
  public cityId!: number;
  public data!: WeatherData[];

  public static findAll(): Weather[] {
    return weathers;
  }

  public static findByCityId(id: number): Weather | undefined {
    return weathers.find(w => w.cityId == id);
  }
}
