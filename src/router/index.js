import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from "@/views/Weather";


Vue.use(VueRouter)


const routes = [
  {path: '/', redirect: "/weather"},
  {path: "/weather", component: Weather, name: "Weather"}
]


export default new VueRouter({routes})
