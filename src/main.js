import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import App from './App'

//Register components globally
Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})