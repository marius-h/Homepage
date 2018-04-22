import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/Home'
import news from '../router/news'
import impress from '../router/impress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/impress',
      name: 'impress',
      component: impress
    }
  ]
})
