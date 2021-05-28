import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from "@/views/Weather";
import Menu from "@/views/Menu";
import Search from "@/views/Search";


Vue.use(VueRouter)


const routes = [
  {path: '/', redirect: "/menu"},
  {path: "/menu", component: Menu, name: "Menu"},
  {path: "/weather", component: Weather, name: "Weather"},
  {path: "/search", component: Search, name: "Search"}
]


export default new VueRouter({routes})
