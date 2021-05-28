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
    return response.data
  }


  async getLocationsFromSearchTerm(searchTerm, limit=5) {
    let response = await axios.get(`${this.url}/geo/1.0/direct?q=${searchTerm}&limit=${limit}&appid=${this.key}&lang=${this.language}`)
    return response.data
  }

  buildIconUrl(iconId) {
    return `https://openweathermap.org/img/wn/${iconId}@4x.png`
  }
}


export default new OpenWeatherMapClient(
  OPEN_WEATHER_MAP_API_URL,
  OPEN_WEATHER_MAP_API_KEY,
  LOCALE,
  WEATHER_UNITS
)
