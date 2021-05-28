import owm_client from "@/api/owm_client";


async function getCurrentGpsPosition(timeout=10000) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {timeout: timeout});
  })
}


export default {
  namespaced: true,
  state: {
    favouriteLocations: Array()
  },

  mutations: {
    addFavouriteLocation(state, location) {
      state.favouriteLocations.push(location)
    },

    removeFavouriteLocation(state, location) {
      state.favouriteLocations.splice(state.favouriteLocations.indexOf(location), 1)
    }
  },

  getters: {
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

    async getLocationsBySearchTerm(context, {searchTerm}) {
      return await owm_client.getLocationsFromSearchTerm(searchTerm)
    }
  }
}
