import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import VueFire from 'vuefire'
import App from './App'
import Menu from '@/components/Menu/Menu'
//Register components globally
Vue.use(VueFire)
Vue.use(VueResource)

Vue.component('Menu', Menu)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})