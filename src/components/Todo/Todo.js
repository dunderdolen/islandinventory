import db from '../../db'
var todosRef = db.ref("todos/")
export default {
  name: 'Todo',
  firebase: {
    todos: db.ref("todos/")
  },
  data () {
    return {
      title: '',
      createdBy: '',
      createdDate: '',
      isEditing: false,
      isCreating: false
    }
  },
  methods: {
    openForm() {
      this.isCreating = true
    },
    createTodo () {
      this.isCreating = false
        todosRef.push({
        title: this.title
      });
    },
    updateTodo(todo) {
      this.isEditing = true;
      todosRef.child(todo['.key']).child('title').set(todo, $event.target.value)
    },
    doneUpdating() {
      this.isEditing = false;
    }
  }
}