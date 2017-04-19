//Import components and libraries
import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import Welcome from './components/Welcome'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Register components globally
Vue.use(BootstrapVue)
Vue.use(VueFire)

//Declare component to use them in other Vue components
Vue.component('Welcome', Welcome);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})