<template>
  <div>
    <ul>
      <li v-for="item in anArray">
        <div>
          <h2>{{ item.title }} </h2>
        </div>
         <div>
          <h4>{{ item.desc }} </h4>
         </div> 
      </li>
    </ul>
  </div>
</template>

<script>
import db from '../db'
export default {
  name: 'ListTodos',
  firebase: {
      anArray: db.ref('todos')
  }
}
</script>

<style lang="scss">
#list-todos {
  grid-column: 1;
    grid-row: 3;
    grid-row-gap: 10px;
    padding: 10px;
    background-color: white;
}
</style>