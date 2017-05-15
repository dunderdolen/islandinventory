import db from '../../db'
var todosRef = db.ref("todos/")
export default {
  name: 'todo',
  firebase: {
    todos: db.ref("todos/")
  },
  data () {
    return {
    title: '',
    desc: '',
    createdBy: '',
    createdDate: '',
    done: false
    }
  },
  methods: {
    createTodo () {
      todosRef
      db.ref("todos/").push({
        title: this.title,
        desc: this.desc,
        done: this.done
        });
      },
    removeTodo(key) {
      todosRef.child(key).remove()  
    },
    updateTodo(key) {
      
    }
  }
}