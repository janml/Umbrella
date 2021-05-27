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
      <CurrentWeatherCard :current-weather="currentWeather" v-if="currentWeather"></CurrentWeatherCard>
      <!-- Hourly forecast -->
      <HourlyForecastCard :forecast="hourlyForecast" v-if="hourlyForecast"></HourlyForecastCard>
    </v-container>
  </div>
</template>


<script>
import HourlyForecastCard from "@/components/HourlyForecastCard";
import {mapGetters} from "vuex"
import CurrentWeatherCard from "@/components/CurrentWeatherCard";


export default {
  name: "Weather",
  components: {CurrentWeatherCard, HourlyForecastCard},
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
