
import Vue from 'vue'
import router from './router'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import CreateTodo from './components/CreateTodo'

//Register components globally
Vue.use(VueFire)
Vue.component('CreateTodo', CreateTodo);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})