import owm_client from "@/api/owm_client";
import moment from "@/lib/moment";


const FORECAST_MAX_ENTRIES = 5


export default {
  namespaced: true,

  state: {
    location: {name: "Hannover", latitude: 52.3758916, longitude: 9.7320104},
    currentWeather: null,
    hourlyForecast: null,
    dailyForecast: null
  },

  mutations: {
    setLocation(state, location) {
      state.location = location
    },

    setCurrentWeather(state, currentWeather) {
      state.currentWeather = currentWeather
    },

    setHourlyForecast(state, hourlyForecast) {
      state.hourlyForecast = hourlyForecast
    },

    setDailyForecast(state, dailyForecast) {
      state.dailyForecast = dailyForecast
    }
  },

  getters: {
    getLocation: (state) => {
      return state.location
    },

    getCurrentWeather: (state) => {
      if (!state.currentWeather) {return null}

      return {
        temperature: Math.round(state.currentWeather['temp']),
        humidity: state.currentWeather['humidity'],
        description: state.currentWeather['weather'][0]['description'],
        airPressure: state.currentWeather['pressure'],
        windSpeed: state.currentWeather['wind_speed']
      }
    },

    getHourlyForecast: (state) => {
      let hourlyForecast = Array()
      let now = moment.now()

      if (!state.hourlyForecast) {return }

      for (let forecast of state.hourlyForecast) {
        if (hourlyForecast.length === FORECAST_MAX_ENTRIES) {break}

        let forecastTimestamp = moment.unix(forecast["dt"])

        if (now < forecastTimestamp) {  // Only using forecast data ...
          hourlyForecast.push({
            time: forecastTimestamp.format("HH:mm"),
            temperature: forecast["temp"],
            iconUrl: owm_client.buildIconUrl(forecast["weather"][0]["icon"]),
            humidity: forecast["humidity"]
          })
        }
      }
      return hourlyForecast
    },

    getDailyForecast: (state) => {
      let dailyForecast = Array()
      let today = moment.now()

      if (!state.dailyForecast) {return }
      for (let forecast of state.dailyForecast) {
        if (dailyForecast.length === FORECAST_MAX_ENTRIES) {break}

        let forecastTimestamp = moment.unix(forecast["dt"])

        if (today < forecastTimestamp) {
          dailyForecast.push({
            day: forecastTimestamp.format("dddd"),
            minTemperature: forecast["temp"]["min"],
            maxTemperature: forecast["temp"]["max"],
            iconUrl: owm_client.buildIconUrl(forecast["weather"][0]["icon"])
          })
        }
      }
      return dailyForecast
    }
  },

  actions: {
    async requestWeatherConditions(context) {
      let location = context.getters.getLocation
      let weather = await owm_client.requestWeatherConditions(location.latitude, location.longitude)
      context.commit("setCurrentWeather", weather["current"])
      context.commit("setHourlyForecast", weather["hourly"])
      context.commit("setDailyForecast", weather["daily"])
    }
  }
}
