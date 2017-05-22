import db from '../../db'
var todosRef = db.ref("todos/")
var date = new Date().toISOString().slice(0,10);
export default {
  name: 'Todo',
  firebase: {
    todos: db.ref("todos/")
  },
  data () {
    return {
      title: '',
      createdBy: '',
      createdDate: date,
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
        title: this.title,
        date: this.createdDate
      });
    },
    updateTodo(todo) {
      this.isEditing = true;
      todosRef.child(todo['.key']).child('title').set(todo, $event.target.value)
    },
    doneUpdating() {
      this.isEditing = false;
    },
    show () {
      this.$modal.show('hello-world');
    },
    hide () {
      this.$modal.hide('hello-world');
    }
  }
}