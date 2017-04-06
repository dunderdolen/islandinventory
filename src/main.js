import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import Welcome from './components/Welcome'

Vue.use(VueFire)
Vue.component(Welcome)
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
