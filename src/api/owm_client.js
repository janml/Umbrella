import axios from "axios";

import {OPEN_WEATHER_MAP_API_KEY} from "@/config";
import {OPEN_WEATHER_MAP_API_URL} from "@/config"
import {LOCALE} from "@/config"
import {WEATHER_UNITS} from "@/config"


class OpenWeatherMapClient {
  constructor(url, key, language, unit) {
    this.url = url
    this.key = key
    this.language = language
    this.unit = unit
  }

  async requestWeatherConditions(latitude, longitude) {
    let response = await axios.get(`${this.url}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${this.key}&lang=${this.language}&units=${this.unit}`)
    //console.log(JSON.stringify(response.data, null, 2))
    return response.data
  }
}


export default new OpenWeatherMapClient(
  OPEN_WEATHER_MAP_API_URL,
  OPEN_WEATHER_MAP_API_KEY,
  LOCALE,
  WEATHER_UNITS
)
