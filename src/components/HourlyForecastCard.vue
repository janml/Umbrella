<template>
  <v-expansion-panels class="mt-6">
    <v-expansion-panel class="is-transparent">
      <v-expansion-panel-header class="white--text subtitle-1">
        {{$t('Upcoming hours')}}
        <template v-slot:actions>
          <v-icon color="white" small>$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-card class="transparent" elevation="0">
          <v-list class="transparent">
            <v-list-item v-for="(item, i) in forecast" :key="i">
              <v-list-item-title class="white--text">
                {{item.time}}
              </v-list-item-title>
              <v-img :src="item.iconUrl" width="50" class="mr-3">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5" size="20"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-list-item-subtitle class="white--text text-left">
                {{item.temperature}} °C
              </v-list-item-subtitle>
              <v-list-item-icon class="ml-8">
                <v-icon color="white" small>
                  fa-tint
                </v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle class="white--text">
                {{item.humidity}} %
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>


<script>
export default {
  name: "HourlyForecastCard",
  props: {
    forecast: {
      type: Array,
      required: true,
      default: [
        {
          time: String,
          temp: Number,
          humidity: Number,
          iconUrl: String
        },
      ]
    }
  }
}
</script>
