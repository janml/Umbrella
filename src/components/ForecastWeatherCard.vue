<template>
  <v-card class="is-transparent mt-6">
    <v-list class="transparent">
      <v-list-item v-for="(item, i) in forecast" :key="i">
        <v-list-item-title class="white--text">
          {{item.time}}
        </v-list-item-title>
        <v-list-item-subtitle class="white--text">
          {{item.temp}} °C
        </v-list-item-subtitle>
        <v-list-item-icon>
          <v-icon color="white" small>
            fa-tint
          </v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{item.humidity}} %
        </v-list-item-subtitle>
        <v-list-item-icon>
          <v-icon color="white" small>
            fa-wind
          </v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{item.windSpeed}} km/h
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>


<script>
export default {
  name: "ForecastWeatherCard",
  props: {
    forecast: {
      type: Array,
      required: true,
      default: [
        {time: "12:00", temp: 20, humidity: 20, windSpeed: 10},
        {time: "12:00", temp: 20, humidity: 20, windSpeed: 10},
        {time: "12:00", temp: 20, humidity: 20, windSpeed: 10}
      ]
    }
  }
}
</script>
