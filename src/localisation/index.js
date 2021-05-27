import VueI18n from "vue-i18n"
import Vue from "vue"

import {LOCALE} from "@/config";
import de from "./de.json"
import en from "./en.json"


Vue.use(VueI18n)


const i18n = new VueI18n({
    locale: LOCALE,
    fallbackLocale: "en",
    messages: {de, en},
})

export default i18n
