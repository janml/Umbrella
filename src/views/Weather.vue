<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
      <v-card-title class="white--text">Hannover</v-card-title>
    </v-app-bar>

    <v-container>

      <!-- Current weather-->
      <v-card class="is-transparent">
        <p class="text-h1 pt-5 pl-5 is-white">
          {{currentWeather.temp}}°C
        </p>
        <v-row class="text-center">
          <v-col class="is-white">
            <v-icon color="white">fa-wind</v-icon>
            <p>{{currentWeather.windSpeed}} km/h</p>
          </v-col>
          <v-col class="is-white">
            <v-icon color="white">fa-tint</v-icon>
            <p>{{currentWeather.humidity}} %</p>
          </v-col>
          <v-col class="is-white">
            <v-icon color="white">fa-compress-arrows-alt</v-icon>
            <p>{{currentWeather.airPressure}} hPa</p>
          </v-col>
        </v-row>
      </v-card>

      <!-- Hourly forecast -->
      <ForecastWeatherCard :forecast="hourlyForecast"></ForecastWeatherCard>

      <!-- Daily forecast -->
      <ForecastWeatherCard :forecast="hourlyForecast"></ForecastWeatherCard>

    </v-container>
  </div>
</template>


<script>
import ForecastWeatherCard from "@/components/ForecastWeatherCard";
export default {
  name: "Weather",
  components: {ForecastWeatherCard},
  computed: {
    currentWeather() {
      return {temp: 18, humidity: 60, windSpeed: 20, airPressure: 20}
    },

    hourlyForecast() {
      return [
          {time: "12:00", temp: 20, humidity: 20, windSpeed: 10},
          {time: "12:00", temp: 20, humidity: 20, windSpeed: 10},
          {time: "12:00", temp: 20, humidity: 20, windSpeed: 10}
      ]
    },

    dailyForecast() {

    }
  }
}
</script>
