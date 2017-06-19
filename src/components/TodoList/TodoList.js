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
      this.notifyMe(this.title)
      this.$modal.hide('create-todo');
    },
    deleteTodo(todo) {
      todosRef.child(todo['.key']).remove()   
    },
    notifyMe(message) {
      if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
      }
      else if (Notification.permission === "granted") {
        var notification = new Notification(message);
      }
      else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
          if (permission === "granted") {
            var notification = new Notification(message)
          }
        });
      }
    }
  }
}