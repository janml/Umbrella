

class Location {
  constructor(name, latitude, longitude, country) {
    this.name = name
    this.latitude = latitude
    this.longitude = longitude
    this.country = country
  }
}


export default {
  namespaced: true,
  state: {
    locations: Array()
  },

  mutations: {
    addLocation(state, location) {state.locations.push(location)},
    removeLocation(state, location) {}
  },

  getters: {
    getLocations: (state) => {return state.locations}
  }
}
