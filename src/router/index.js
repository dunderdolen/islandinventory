import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App'

Vue.use(Router)

const Todo = resolve => {
  require.ensure(['../components/Todo/Todo.vue'], () => {
    resolve(require('../components/Todo/Todo.vue'))
  })
}

export default new Router({
  routes: [
  { path: '/', name: 'App' },
  { path: '/todo', component: Todo }
  ]
})

