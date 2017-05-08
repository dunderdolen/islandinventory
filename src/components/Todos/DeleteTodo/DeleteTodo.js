import db from '../db'
export default {
  firebase: {
    ref: db.ref("todos/")
  },
  data () {
    return {
      title,
      desc,
      done
    }
  },
  methods: {
    deleteTodo () {
      db.ref("todos/").push({
        title: this.title,
        desc: this.desc,
        done: this.done
        });
      }
    }
  }