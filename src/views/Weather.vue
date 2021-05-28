<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-btn icon color="white" @click="$router.push({name: 'Menu'})">
        <v-icon>fa-align-left</v-icon>
      </v-btn>
      <v-card-title class="white--text">{{location.name}}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click="addCurrentLocationToFavourites">
        <v-icon>fa-heart</v-icon>
      </v-btn>
      <v-btn icon color="white" @click="$router.push({name: 'Search'})">
        <v-icon>fa-search</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <!-- Current weather-->
      <CurrentWeatherCard :current-weather="currentWeather" v-if="currentWeather"></CurrentWeatherCard>
      <!-- Hourly forecast -->
      <HourlyForecastCard :forecast="hourlyForecast" v-if="hourlyForecast"></HourlyForecastCard>
      <!-- Daily forecast -->
      <DailyForecastCard :forecast="dailyForecast" v-if="dailyForecast"></DailyForecastCard>
    </v-container>
  </div>
</template>


<script>
import {mapGetters} from "vuex"
import CurrentWeatherCard from "@/components/CurrentWeatherCard";
import HourlyForecastCard from "@/components/HourlyForecastCard";
import DailyForecastCard from "@/components/DailyForecastCard";


export default {
  name: "Weather",
  components: {DailyForecastCard, CurrentWeatherCard, HourlyForecastCard},

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
    },

    addCurrentLocationToFavourites() {
      this.$store.commit("locations/addFavouriteLocation", this.location)
      this.$store.commit("ui/showPopup", this.$t("Location has been added to favourites."))
    }
  },

  async mounted() {
    await this.loadWeather()
  }
}
</script>
