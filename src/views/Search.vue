<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-btn icon color="white" @click="$router.push({name: 'Menu'})">
        <v-icon>fa-chevron-left</v-icon>
      </v-btn>

      <v-text-field color="white" class="mt-4" :placeholder="$t('Location')" dark v-model="searchTerm"></v-text-field>
      <v-btn icon color="white" @click="loadLocationFromSearchTerm">
        <v-icon>fa-search</v-icon>
      </v-btn>
      <v-btn icon color="white" @click="loadLocationFromCurrentGpsPosition">
        <v-icon>fa-map-marker-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-card class="is-transparent mb-3" v-for="(location, i) in locationSearchResults" :key="i">
        <v-list-item-group>
          <v-list-item @click="enterWeatherView(location)">
            <v-list-item-content>
              <v-list-item-title class="white--text">{{location.name}} ({{location.country}})</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-container>
  </div>
</template>


<script>
import {mapGetters} from "vuex"


export default {
  name: "Search",

  computed: {
    ...mapGetters({
      "locationSearchResults": "locations/getSearchResults"
    })
  },

  data() {
    return {
      searchTerm: String()
    }
  },

  methods: {
    async loadLocationFromCurrentGpsPosition() {
      this.$store.commit("ui/showLoadingIndicator")
      try {
        await this.$store.dispatch("locations/loadLocationSearchResultsFromCurrentGpsPosition")
      }
      catch (error) {
        this.$store.commit("ui/showPopup", this.$t(error.message))
      }
      finally {
        this.$store.commit("ui/hideLoadingIndicator")
      }
    },

    async loadLocationFromSearchTerm() {
      this.$store.commit("ui/showLoadingIndicator")
      try {
        await this.$store.dispatch("locations/loadLocationSearchResultsFromSearchTerm", {searchTerm: this.searchTerm})
      }
      catch (error) {
        this.$store.commit("ui/showPopup", this.$t(error.message))
      }
      finally {
        this.$store.commit("ui/hideLoadingIndicator")
      }
    },

    enterWeatherView(location) {
      this.$store.commit("weather/setLocation", location)
      this.$router.push({name: "Weather"})
    }
  }
}
</script>
