import axios from "axios";


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
  process.env.VUE_APP__OPEN_WEATHER_MAP_API_URL,
  process.env.VUE_APP__OPEN_WEATHER_MAP_API_KEY,
  process.env.VUE_APP__LOCALE,
  process.env.VUE_APP__WEATHER_UNITS
)
