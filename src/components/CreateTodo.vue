<template>
  <div id="create-todo">
  <!-- Name, Description, quantity, severity (1-5), save, edit delete -->
  <form class="todo-item" v-on:submit.prevent="createTodo">
    <div><input v-model="todo.title" required type="text" placeholder="Titel" /></div>
    <div><textarea v-model="todo.desc" required placeholder="Beskrvining"></textarea></div>
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
      todo: {
        title: '',
        desc: '',
        done: false
      }    
    }
  },
  methods: {
    createTodo () {
      db.ref("todos/").push({
        todo: this.todo
        });
      }
    }
  }
</script>
<style lang="scss">
  .todo-item {

  }
</style>