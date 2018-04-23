import Vue from 'vue'
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
  VCarousel,
  VParallax,
  VCard
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import VueCarousel from 'vue-carousel'
import i18n from '../lang/lang'
import store from './store'
//  import axios from 'axios'

//  Vue.prototype.$http = axios.create({ baseURL: '/' })

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
    VCarousel,
    VParallax,
    VCard
  },
  theme: {
    primary: '#0D47A1',
    secondary: '#BDBDBD',
    accent: '#5eb8ff',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }
})

Vue.use(VueCarousel)

/* eslint-disable no-new */
export const app = new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

window['vue'] = app
window.store = store
