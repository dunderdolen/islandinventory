
import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import Welcome from './components/welcome'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Register components globally
Vue.use(BootstrapVue)
Vue.use(VueFire)

//Components registered as below can be used 
Vue.component('welcome', Welcome);

//Creating a new vue and connect the el property to the index.html app
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})