import owm_client from "@/api/owm_client";


async function getCurrentGpsPosition() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}


export default {
  namespaced: true,
  state: {
    locationSearchResults: Array(),
    favouriteLocations: Array()
  },

  mutations: {
    setLocationSearchResults(state, searchResults) {
      state.locationSearchResults = searchResults
    },

    addFavouriteLocation(state, location) {
      state.favouriteLocations.push(location)
    },

    removeFavouriteLocation(state, location) {

    }
  },

  getters: {
    getSearchResults: (state) => {
      return state.locationSearchResults
    },

    getFavouriteLocations: (state) => {
      return state.favouriteLocations
    }
  },

  actions: {
    async loadLocationSearchResultsFromCurrentGpsPosition(context) {
      let position = await getCurrentGpsPosition()
      let locations = await owm_client.getLocationsFromGpsPosition(position.coords.latitude, position.coords.longitude)
      context.commit("setLocationSearchResults", locations)
    },

    async loadLocationSearchResultsFromSearchTerm(context, {searchTerm}) {
      let locations = await owm_client.getLocationsFromSearchTerm(searchTerm)
      context.commit("setLocationSearchResults", locations)
    }
  }
}
