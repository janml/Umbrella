<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-card-title class="white--text">{{$t("Locations")}}</v-card-title>
      <v-spacer></v-spacer>
      <v-btn icon color="white" @click="$router.push({name: 'Search'})">
        <v-icon>fa-plus</v-icon>
      </v-btn>
      <v-btn icon color="white">
        <v-icon>fa-cog</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-card class="is-transparent mb-3" v-for="(location, i) in favouriteLocations" :key="i">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content @click="enterWeatherView(location)">
              <v-list-item-title class="white--text">{{location.name}} ({{location.country}})</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="removeFavouriteLocation(location)">
                <v-icon color="white" small>fa-trash</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import {mapGetters} from "vuex"


export default {
  name: "Menu",

  computed: {
    ...mapGetters({
      "favouriteLocations": "locations/getFavouriteLocations"
    })
  },

  methods: {
    enterWeatherView(location) {
      this.$store.commit("weather/setLocation", location)
      this.$router.push({name: "Weather"})
    },

    removeFavouriteLocation(location) {
      this.$store.commit("locations/removeFavouriteLocation", location)
    }
  }
}
</script>
