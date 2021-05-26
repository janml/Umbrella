import owm_client from "@/api/owm_client";


export default {
  namespaced: true,
  state: {
    location: {name: "Hannover", latitude: 52.3758916, longitude: 9.7320104},
    currentWeather: null,
    hourlyForecast: null,
    dailyForecast: null
  },

  mutations: {
    setLocation(state, location) {state.location = location},
    setCurrentWeather(state, currentWeather) {state.currentWeather = currentWeather; console.log(JSON.stringify(currentWeather, null, 2))},
    setHourlyForecast(state, hourlyForecast) {state.hourlyForecast = hourlyForecast},
    setDailyForecast(state, dailyForecast) {state.dailyForecast = dailyForecast}
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
      return state.hourlyForecast
    },

    getDailyForecast: (state) => {
      return state.dailyForecast
    }
  },

  actions: {
    async requestWeatherConditions(context) {
      let location = context.getters.getLocation
      let response = await owm_client.requestWeatherConditions(location.latitude, location.longitude)
      context.commit("setCurrentWeather", response["current"])
    }
  }
}
