import db from '../../db'
var todosRef = db.ref("todos/")
import Todo from '../Todo/Todo.vue'
export default {
  name: 'TodoList',
  props: ['isAuthorized'],
  components: {Todo},
  firebase: {
    todos: db.ref("todos/")
  },
  data () {
    return {
      
    }
  },
  methods: {
    removeTodo(todo) {
      todosRef.child(todo).remove()  
    }
  }
}