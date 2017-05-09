import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

const Create = resolve => {
  require.ensure(['../components/Todos/CreateTodo/CreateTodo.vue'], () => {
    resolve(require('../components/Todos/CreateTodo/CreateTodo.vue'))
  })
}
const ListTodos = resolve => {
  require.ensure(['../components/Todos/ListTodos/ListTodos.vue'], () => {
    resolve(require('../components/Todos/ListTodos/ListTodos.vue'))
  })
}

export default new Router({
  routes: [
  { path: '/', name: 'App' },
  { path: '/create', component: Create },
  { path: '/list', component: ListTodos }
  ]
})

