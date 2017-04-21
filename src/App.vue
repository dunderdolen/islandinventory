<template>
    <main>
        <img id="logo" v-if="!isAuthorized" src="http://placehold.it/250x150"/>
        <div class="wrapper">  
            <!-- v-model is used for TWO way binding. v-bind is one way binding -->
            <h2 id="welcome-text" v-if="!isAuthorized">Logga in med din email och lösenord</h2>
            <form class="todo" id="login-form" v-if="!isAuthorized" v-on:submit.prevent="signIn">
                <input v-model="email" type="email" placeholder="Email"></input>
                <input v-model="password" type="password" placeholder="Password"></input>
                <button type="submit" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</button>
            </form>
            <div v-if="isAuthorized">
                <CreateTodo></CreateTodo>
                <button id="logout-button" v-on:click="signOut" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</button>
            </div>
        </div>
    </main>
</template>

<script>
import db from './db'
import Firebase from 'firebase'

export default {
name: 'app',
data () {
    return {
        email: '',
        password: '',
        buttonMsg: '',
        isAuthorized: false
    }
},
mounted(){
    var self = this;
    Firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            self.isAuthorized = true;
            self.buttonMsg = "Logga ut";
            console.log("User is logged in ");                
        }
        else {
            //Stay on login
            self.buttonMsg = "Logga in"; 
            console.log("User is not logged in");
        }
    });
},
methods: {        
  signIn() {
    Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });
  },
  signOut() {
    Firebase.auth().signOut();
    this.isAuthorized = false;
  }
  }
}
</script>

<style lang="scss">
@import '../variables';

body{
    margin: 0;
    padding: 0;
    font-family: $font;
}
.wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
    background-color: $background;
}
#welcome-text {
    text-align: center;
    margin: 0 auto;
}
    
.todo {
    grid-column: 1;
    grid-row: 3;
    grid-row-gap: 10px;
    padding: 10px;
    background-color: white;
}
#login-form input, button {
    padding: 10px;
    margin-bottom: 2px;
    text-align: center;
    width: 100%;
    font-size: 16pt;
    border: 1px solid #ccc;
    border-radius: 4px;   
}

</style>
