<template>
  <v-expansion-panels class="mt-6">
    <v-expansion-panel class="is-transparent white--text">
      <v-expansion-panel-header class="white--text subtitle-1">
        {{$t('Next days')}}
        <template v-slot:actions>
          <v-icon color="white" small>$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-list two-line class="transparent">
          <template v-for="item in forecast">
            <v-list-item>
              <v-list-item-avatar>
                <v-img :src="item.iconUrl" height="55">
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular indeterminate color="white" size="20" width="2"></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="white--text">{{item.day}}</v-list-item-title>
                <v-list-item-subtitle class="white--text">
                  <strong>↑ {{item.maxTemperature}} °C ↓ {{item.minTemperature}} °C</strong>
                  <br>{{item.description}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
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
