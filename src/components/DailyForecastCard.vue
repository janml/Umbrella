<template>
  <v-card class="is-transparent mt-6">
    <v-list class="transparent">
      <v-list-item v-for="(item, i) in forecast" :key="i">

        <!-- Day -->
        <v-list-item-title class="white--text">
          {{item.day}}
        </v-list-item-title>

        <!-- Icon -->
        <v-img :src="item.iconUrl" width="50" class="mr-3">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5" size="20"></v-progress-circular>
            </v-row>
          </template>
        </v-img>

        <!-- Min temperature -->
        <v-list-item-icon>
          <v-icon color="white" small>
            fa-long-arrow-alt-down
          </v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{item.minTemperature}} °C
        </v-list-item-subtitle>

        <!-- Max temperature -->
        <v-list-item-icon>
          <v-icon color="white" small>
            fa-long-arrow-alt-up
          </v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle class="white--text">
          {{item.maxTemperature}} °C
        </v-list-item-subtitle>

      </v-list-item>
    </v-list>
  </v-card>
</template>


<script>
export default {
  name: "DailyForecastCard",
  props: {
    forecast: {
      type: Array,
      default: [
        {
          day: String,
          iconUrl: String,
          minTemperature: Number,
          maxTemperature: Number
        }
      ]
    }
  }
}
</script>
