<template>
  <div id="create-todo">
  <!-- Name, Description, quantity, severity (1-5), save, edit delete -->
  <form class="todo-item" v-on:submit.prevent="createTodo">
    <div><input v-model="todo.name" required type="text" placeholder="Namn" /></div>
    <div><textarea v-model="todo.desc" required placeholder="Beskrvining"></textarea></div>
    <div><input v-model="todo.quantity" type="number" placeholder="Antal" /></div>
    <div><input v-model="todo.severity" type="number" placeholder="Prio" /></div>
    <button type="submit">Skapa</button>
  </form>

  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data () {
    return {
      todo: {
        name: '',
        desc: '',
        quantity: 0,
        severity: 0,
        created: false
      }    
    }
  },
  methods: {
    createTodo () {
        //Send to firebase and clear the list
    }
  }
}
</script>
<style lang="scss">
  .todo-item {

  }
</style>