import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import Fattorip from '@/components/Fattorip'
import Getdata from '@/components/Getdata'
import Mactest from '@/components/Mactest'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HomePage', component: HomePage },
    { path: '/fattorip', name: 'Fattorip', component: Fattorip },
    { path: '/getdata', name: 'Getdata', component: Getdata },
    { path: '/mactest', name: 'Mactest', component: Mactest }
  ]
})
