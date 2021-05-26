

export default {
  namespaced: true,
  state: {
    currentWeather: null,
    hourlyForecast: null,
    dailyForecast: null
  },

  mutations: {
    setCurrentWeather(state, currentWeather) {state.currentWeather = currentWeather},
    setHourlyForecast(state, hourlyForecast) {state.hourlyForecast = hourlyForecast},
    setDailyForecast(state, dailyForecast) {state.dailyForecast = dailyForecast}
  },

  getters: {
    getCurrentWeather: (state) => {return state.currentWeather},
    getHourlyForecast: (state) => {return state.hourlyForecast},
    getDailyForecast: (state) => {return state.dailyForecast}
  },

  actions: {
    async requestWeatherForGpsCoordinates({context}, longitude, latitude) {
    }
  }
}
