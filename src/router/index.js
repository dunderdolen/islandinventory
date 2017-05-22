import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

const TodoList = resolve => {
  require.ensure(['../components/TodoList/TodoList.vue'], () => {
    resolve(require('../components/TodoList/TodoList.vue'))
  })
}

export default new Router({
  routes: [
  { path: '/', name: 'App' },
  { path: '/todoList', component: TodoList }
  ]
})

