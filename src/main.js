import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import App from './App'
import Menu from './components/Menu'

//Register components globally
Vue.use(VueFire)
Vue.component('Menu', Menu);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})