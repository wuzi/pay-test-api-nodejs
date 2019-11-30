import weathers from '../data/weather_list.json';

export default class Weather {
  public cityId!: number;
  public data!: WeatherData[];

  public static findAll(): Weather[] {
    return weathers;
  }

  public static findByCityId(id: number, where?: Partial<WeatherWhereOptions>): Weather | undefined {
    const { ...weather } = weathers.find(w => w.cityId == id);

    if (where) {
      if (where.startDate) {
        const date = new Date(where.startDate);
        weather.data = weather.data.filter(r => new Date(r.dt * 1000).getTime() >= date.getTime());
      }

      if (where.endDate) {
        const date = new Date(where.endDate);
        weather.data = weather.data.filter(r => new Date(r.dt * 1000).getTime() <= date.getTime());
      }
    }

    return Object.keys(weather).length > 0 ? weather : undefined;
  }
}
