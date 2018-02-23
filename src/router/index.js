import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Fattorip from '@/components/Fattorip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/fattorip',
      name: 'Fattorip',
      component: Fattorip
    }
  ]
})
