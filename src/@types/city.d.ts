interface CityCoord {
  lon: number;
  lat: number;
}

interface CityGeoName {
  cl: string;
  code: string;
  parent: number;
}

interface CityStat {
  level: number;
  population: number;
}

interface CityStation {
  id: number;
  dist: number;
  kf: number;
}

interface CityFindAllOptions {
  hasWeather: boolean;
  lat: number;
  lon: number;
}
