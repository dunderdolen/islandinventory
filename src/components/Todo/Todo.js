import db from '../../db'
import {bus} from '../../services/bus'
var todosRef = db.ref("todos/")

export default {
  name: 'Todo',
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    updateTodo(todo) {
      this.isEditing = true;
      todosRef.child(todo['.key']).child('title').set(todo, $event.target.value)
    },
    doneUpdating() {
      this.isEditing = false;
    }
  }
}