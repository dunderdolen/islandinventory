import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import VueFire from 'vuefire'
import App from './App'
import Weather from '@/components/Weather/Weather'

//Register components globally
Vue.use(VueFire)
Vue.use(VueResource)
Vue.component('Weather', Weather)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})