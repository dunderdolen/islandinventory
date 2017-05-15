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
      //Push the data to firebase
      todosRef.push({
        title: this.title,
        desc: this.desc,
        done: this.done
      });
      //Reset the input fields
      this.title = ''
      this.desc = ''
    },
    removeTodo(todo) {
      //Delete todo from firebase
      todosRef.child(todo).remove()  
    },
    updateTodo(todo, title) {
      //Update the todo
      todosRef.child(todo['.key']).child('title').set(title)

    }
  }
}