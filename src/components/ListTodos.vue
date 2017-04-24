<template>
  <div id="list-todos">
    <ul>
      <li v-for="todo in todos">
        {{ todo.desc }}
      </li>
    </ul>
  </div>
</template>

<script>
import db from '../db'

let todoRef = db.ref("todos")

export default {
  name: 'ListTodos',
  firebase: {
    todos: todoRef
  }
}
</script>