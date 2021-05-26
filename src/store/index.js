import Vue from 'vue'
import Vuex from 'vuex'
import weather from "@/store/weather";
import locations from "@/store/locations";
import ui from "@/store/ui";


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    weather: weather,
    locations: locations,
    ui: ui
  }
})
