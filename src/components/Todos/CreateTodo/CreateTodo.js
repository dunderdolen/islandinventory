import db from '../../../db'

export default {
  name: 'CreateTodo',
  firebase: {
    ref: db.ref("todos/")
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
      db.ref("todos/").push({
        title: this.title,
        desc: this.desc,
        done: this.done
        });
      }
    }
  }