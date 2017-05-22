import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import App from './App'
import Menu from '@/components/Menu/Menu'
import Login from '@/components/Login/Login'
import Vmodal from 'vue-js-modal'

//Register components globally
Vue.use(VueFire)
Vue.use(Vmodal)

Vue.component('Menu', Menu)
Vue.component('Login', Login)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})