// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import Welcome from './components/Welcome'

Vue.use(VueFire)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
