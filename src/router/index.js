import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

const Home = resolve => {
  require.ensure(['../components/Home.vue'], () => {
    resolve(require('../components/Home.vue'))
  })
}
const Create = resolve => {
  require.ensure(['../components/CreateTodo.vue'], () => {
    resolve(require('../components/CreateTodo.vue'))
  })
}
const ListTodos = resolve => {
  require.ensure(['../components/ListTodos.vue'], () => {
    resolve(require('../components/ListTodos.vue'))
  })
}

export default new Router({
  routes: [
  { path: '/', name: 'App' },
  { path: '/home', component: Home },
  { path: '/create', component: Create },
  { path: '/list', component: ListTodos }
  ]
})

