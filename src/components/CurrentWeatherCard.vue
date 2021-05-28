<template>
  <v-card class="is-transparent">
    <p class="pl-5 pt-5 is-white">
      {{currentWeather.description}}
    </p>
    <p class="text-h1 pl-5 is-white">
      {{currentWeather.temperature}}°C
    </p>

    <p class="pl-5 is-white">
      <v-icon color="white" small>fa-wind</v-icon> {{$t("Wind")}}: {{currentWeather.windSpeed}} km/h
    </p>
    <p class="pl-5 pb-5 is-white">
      <v-icon color="white" small>fa-tint</v-icon> {{$t("Humidity")}}: {{currentWeather.humidity}} %
    </p>
  </v-card>
</template>


<script>
export default {
  name: "CurrentWeatherCard",
  props: {
    currentWeather: {
      type: Object,
      required: true,
      default: {
        description: String,
        temperature: Number,
        windSpeed: Number,
        humidity: Number,
        airPressure: Number
      }
    }
  }
}
</script>
