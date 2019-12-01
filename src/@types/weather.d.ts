interface WeatherData {
  dt: number;
  temp: TempData;
  pressure: number;
  humidity: number;
  weather: WeatherInfo[];
  speed: number;
  deg: number;
  clouds: number;
  uvi: number;
}

interface TempData {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

interface WeatherInfo {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface WeatherWhereOptions {
  startDate: string;
  endDate: string;
}
