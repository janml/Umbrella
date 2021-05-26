import axios from "axios";
import {OPEN_WEATHER_MAP_API_KEY, OPEN_WEATHER_MAP_API_URL, LOCALE, WEATHER_UNITS} from "@/config";


class OpenWeatherMapClient {
  constructor(url, key, language, unit) {
    this.url = url
    this.key = key
    this.language = language
    this.unit = unit
  }
}


export default new OpenWeatherMapClient(
  OPEN_WEATHER_MAP_API_KEY,
  OPEN_WEATHER_MAP_API_URL,
  LOCALE,
  WEATHER_UNITS
)
