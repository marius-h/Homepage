// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MultiLanguage from 'vue-multilanguage'
import App from './App'
import router from './router'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VMenu,
  VAvatar,
  VCarousel
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    VMenu,
    VAvatar,
    VCarousel
  },
  theme: {
    primary: '#0D47A1',
    secondary: '#0288d1',
    accent: '#5eb8ff',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(MultiLanguage, {
  default: 'de',
  en: {
    news: 'News',
    welcome: 'Welcome, {name}',
    contact_us: 'About Us',
    change_lang: 'Change language'
  },
  de: {
    news: 'Neuigkeiten',
    welcome: 'Hallo, {name}',
    contact_us: 'Impressum',
    change_lang: 'Sprache auswählen'
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
