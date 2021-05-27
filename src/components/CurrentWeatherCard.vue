<template>
  <v-card class="is-transparent">
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
</template>

<script>
export default {
  name: "CurrentWeatherCard",
  props: {
    currentWeather: {
      type: Object,
      default: {
        description: "Some clouds",
        temperature: 20,
        windSpeed: 5,
        humidity: 60,
        airPressure: 1000
      }
    }
  }
}
</script>
