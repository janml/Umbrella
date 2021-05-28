import Vue from 'vue'
import Vuex from 'vuex'
import weather from "@/store/weather";
import ui from "@/store/ui";
import locations from "@/store/locations";
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)


export default new Vuex.Store({
  plugins: [createPersistedState({paths: ["locations"], key: "locations", storage: window.localStorage})],
  modules: {
    weather: weather,
    locations: locations,
    ui: ui
  }
})
