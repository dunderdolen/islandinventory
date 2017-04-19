<template>
  <div id="app">
    <img src="./assets/logo.png"/>

    <!-- v-model is used for TWO way binding. v-bind is one way binding -->
    <form id="login-form" v-if="!isAuthorized" v-on:submit.prevent="signIn">
        <b-form-input v-model="email" type="email" placeholder="Email"></b-form-input>
        <b-form-input v-model="password" type="password" placeholder="Password"></b-form-input>
        <b-button size="sm" variant="primary" type="submit" v-bind:buttonMsg='buttonMsg' v-on:click="signIn">{{ buttonMsg }}</b-button>
    </form>
    <div v-if="isAuthorized">
        <Welcome></Welcome>
        <b-button size="sm" variant="primary" v-on:click="signOut" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</b-button>
    </div>
  </div>  
</template>

<script>
import Firebase from 'firebase'
import Router from '@/router'

var config = {
    apiKey: "AIzaSyBdrml5SQC6sGW1AeAEMxFnlXvX84izaPg",
    authDomain: "islandinventory-98ed2.firebaseapp.com",
    databaseURL: "https://islandinventory-98ed2.firebaseio.com"
}

Firebase.initializeApp(config)
var taskRef = Firebase.database().ref('Task');

export default {
    name: 'app',
    firebase: {
        tasks: taskRef
     },
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
        signIn () {
            Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        },
        signOut() {
            Firebase.auth().signOut();
            this.isAuthorized = false;
        },
    }
}
</script>

<style>

</style>
