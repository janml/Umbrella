import Vue from 'vue'
import Vuex from 'vuex'
import weather from "@/store/weather";
import ui from "@/store/ui";
import locations from "@/store/locations";
import VuexPersistence from "vuex-persist";


Vue.use(Vuex)


const vuexPersistence = new VuexPersistence({
  storage: window.localStorage,
  key: "umbrella",
  reducer: (state) => {
    return {"locations": {"favouriteLocations": state.locations.favouriteLocations}}
  }
})


export default new Vuex.Store({
  plugins: [vuexPersistence.plugin],
  modules: {
    weather: weather,
    locations: locations,
    ui: ui
  }
})
