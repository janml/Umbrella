<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
      <v-card-title class="white--text">{{location.name}}</v-card-title>
    </v-app-bar>
    <v-container>

      <!-- Current weather-->
      <v-card class="is-transparent" v-if="currentWeather">
        <p class="pl-5 pt-5 is-white">
          {{currentWeather['weather'][0]['description']}}
        </p>
        <p class="text-h1 pl-5 is-white">
          {{Math.round(currentWeather['temp'])}}°C
        </p>
        <v-row class="text-center">
          <v-col class="is-white">
            <v-icon color="white">fa-wind</v-icon>
            <p>{{currentWeather['wind_speed']}} km/h</p>
          </v-col>
          <v-col class="is-white">
            <v-icon color="white">fa-tint</v-icon>
            <p>{{currentWeather['humidity']}} %</p>
          </v-col>
          <v-col class="is-white">
            <v-icon color="white">fa-compress-arrows-alt</v-icon>
            <p>{{currentWeather['pressure']}} hPa</p>
          </v-col>
        </v-row>
      </v-card>

      <!-- Hourly forecast -->
      <ForecastWeatherCard :forecast="hourlyForecast" v-if="hourlyForecast"></ForecastWeatherCard>

      <!-- Daily forecast -->
      <ForecastWeatherCard :forecast="hourlyForecast" v-if="dailyForecast"></ForecastWeatherCard>

    </v-container>
  </div>
</template>


<script>
import ForecastWeatherCard from "@/components/ForecastWeatherCard";
import {mapGetters} from "vuex"


export default {
  name: "Weather",
  components: {ForecastWeatherCard},
  computed: {
    ...mapGetters({
      "location": "weather/getLocation",
      "currentWeather": "weather/getCurrentWeather",
      "hourlyForecast": "weather/getHourlyForecast",
      "dailyForecast": "weather/getDailyForecast"
    })
  },

  async mounted() {
    this.$store.commit("ui/showLoadingIndicator")
    await this.$store.dispatch("weather/requestWeatherConditions")
    this.$store.commit("ui/hideLoadingIndicator")
  }
}
</script>
