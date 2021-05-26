import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './lib/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {ENVIRONMENT} from "@/config";


function main() {
  Vue.config.productionTip = ENVIRONMENT === "development"

  new Vue({
    router,
    store,
    vuetify,
    render: function (h) { return h(App) }
  }).$mount('#app')
}


if (window.cordova) {
  // Wait for cordova webview to be loaded and ready to use !
  document.addEventListener("deviceready", () => {main()})
}

else {
  main()
}
