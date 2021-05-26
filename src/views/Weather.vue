<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-btn icon color="white">
        <v-icon>fa-align-left</v-icon>
      </v-btn>
      <v-card-title class="white--text">{{location.name}}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white">
        <v-icon>fa-heart</v-icon>
      </v-btn>
    </v-app-bar>
    <v-container>

      <!-- Current weather-->
      <v-card class="is-transparent" v-if="currentWeather">
        <p class="pl-5 pt-5 is-white">
          {{currentWeather.description}}
        </p>
        <p class="text-h1 pl-5 is-white">
          {{currentWeather.temperature}}°C
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

  methods: {
    async loadWeather() {
      this.$store.commit("ui/showLoadingIndicator")
      try {
        await this.$store.dispatch("weather/requestWeatherConditions")
      }
      catch (error) {
        this.$store.commit("ui/showPopup", error.message)
      }
      finally {
        this.$store.commit("ui/hideLoadingIndicator")
      }
    }
  },

  async mounted() {
    await this.loadWeather()
  }
}
</script>
