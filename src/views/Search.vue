<template>
  <div>
    <v-app-bar class="is-transparent" app fixed>
      <v-btn icon color="white" @click="$router.push({name: 'Menu'})">
        <v-icon>fa-chevron-left</v-icon>
      </v-btn>

      <v-text-field
          color="white"
          class="mt-4"
          dark
          autofocus
          :placeholder="$t('Location')"
          v-model="searchTerm"
          v-on:keyup.enter="loadLocationsFromSearchTerm"
      ></v-text-field>

      <v-btn icon color="white" @click="loadLocationsFromSearchTerm">
        <v-icon>fa-search</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-card class="is-transparent mb-3" v-for="(location, i) in locationSearchResults" :key="i">
        <v-list-item-group>
          <v-list-item>
            <v-list-item-content @click="enterWeatherView(location)">
              <v-list-item-title class="white--text">{{location.name}} ({{location.country}})</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="addLocationToFavourites(location)">
                <v-icon color="white" small>fa-heart</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-card>
    </v-container>
  </div>
</template>


<script>
export default {
  name: "Search",

  data() {
    return {
      searchTerm: String(),
      locationSearchResults: Array()
    }
  },

  methods: {
    async loadLocationsFromSearchTerm() {
      this.$store.commit("ui/showLoadingIndicator")
      try {
        this.locationSearchResults = await this.$store.dispatch(
            "locations/getLocationsBySearchTerm",
            {searchTerm: this.searchTerm}
        )
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
    },

    addLocationToFavourites(location) {
      this.$store.commit("locations/addFavouriteLocation", location)
      this.$store.commit("ui/showPopup", this.$t("Location has been added to favourites."))
    }
  }
}
</script>
