import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'
import Welcome from '@/components/welcome'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'App'
  },
  {
    path: '/Welcome',
    name: 'Welcome'
  }   
  ]
})
