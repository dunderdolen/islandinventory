import db from '../../db'
import Todo from '../Todo/Todo.vue'
import {bus} from '../../services/bus'
var todosRef = db.ref("todos/")
var date = new Date().toISOString().slice(0,10);

export default {
  name: 'TodoList',
  props: ['isAuthorized'],
  components: {Todo},
  firebase: {
    todos: db.ref("todos/")
  },
  data () {
    return {
      isCreating: false,
      createdDate: date,
      title: '',
      show: false
    }
  },
  methods:{
    openForm() {
      this.isCreating = true,
      this.$modal.show('create-todo')
    },
    createTodo(todo) {
      this.isCreating = false
      todosRef.push({
        title: this.title,
        date: this.createdDate
      });
      this.$modal.hide('create-todo');
    },
    deleteTodo(todo) {
      todosRef.child(todo['.key']).remove()   
    }
  }
}