import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import VueFire from 'vuefire'
import App from './App'
import Menu from '@/components/Menu/Menu'
import Login from '@/components/Login/Login'

//Register components globally
Vue.use(VueFire)

Vue.component('Menu', Menu)
Vue.component('Login', Login)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})