<template>
  <div>
  <form class="todo-item" v-on:submit.prevent="createTodo">
    <div><input v-model="title" required type="text" placeholder="Titel" /></div>
    <div><textarea v-model="desc" required placeholder="Beskrvining"></textarea></div>
    <button type="submit">Skapa</button>
  </form>
  </div>
</template>

<script>
import db from '../db'

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
</script>
<style lang="scss">
  .todo-item {

  }
</style>