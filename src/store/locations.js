import owm_client from "@/api/owm_client";


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
    async getLocationsBySearchTerm(context, {searchTerm}) {
      return await owm_client.getLocationsFromSearchTerm(searchTerm)
    }
  }
}
