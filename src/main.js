import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './lib/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {ENVIRONMENT} from "@/config";
import i18n from "@/localisation";


function main() {
  Vue.config.productionTip = ENVIRONMENT === "development"

  new Vue({
    i18n,
    router,
    store,
    vuetify,
    render(root) {return root(App)}
  }).$mount('#app')
}


if (window.cordova) {
  // Wait for cordova webview to be loaded and ready to use !
  document.addEventListener("deviceready", () => {main()})
}

else {
  main()
}
