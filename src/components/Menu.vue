<template>
  <div id="menu">
    <!--<button id="logout-button" v-on:click="signOut" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</button>-->
    <router-link to="/home">Hem</router-link>
    <router-link to="/create">Skapa</router-link>
    <router-link to="/list">Lista</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'menu',

}
</script>

<style>

</style>