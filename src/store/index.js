import Vue from 'vue'
import Vuex from 'vuex'
import weather from "@/store/weather";
import ui from "@/store/ui";
import locations from "@/store/locations";


Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    weather: weather,
    locations: locations,
    ui: ui
  }
})
