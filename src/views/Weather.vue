<template>
  <div>
    <v-app-bar class="weather-transparent">
      <v-app-bar-nav-icon class="white--text"></v-app-bar-nav-icon>
      <v-card-title class="white--text">Hannover</v-card-title>
    </v-app-bar>

    <v-container style="max-width: 500px">
      <v-card class="weather-transparent">
        <p class="text-h1 pt-5 pl-5" style="color: white">18°C</p>
        <v-row class="text-center">
          <v-col style="color: white">
            <v-icon color="white">fa-wind</v-icon>
            <p>12 km/h</p>
          </v-col>
          <v-col style="color: white">
            <v-icon color="white">fa-tint</v-icon>
            <p>60 %</p>
          </v-col>
          <v-col style="color: white">
            <v-icon color="white">fa-compress-arrows-alt</v-icon>
            <p>60 hPa</p>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "Weather"
}
</script>


<style scoped>
  .weather-transparent {
    background-color: rgba(0, 0, 0, 0.4) !important;
  }
</style>
