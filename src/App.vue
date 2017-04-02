<template>
  <div id="app">
    <img src="./assets/logo.png"/>
    <form v-if="!isAuthorized" v-on:submit.prevent="signIn">
        <input type="email" placeholder="Email" v-model="email"/>
        <input type="password" placeholder="Lösenord" v-model="password"/>
        <button tpye="submit">Logga in</button>
    </form>
    <button v-if="isAuthorized" v-on:click="signOut">Sign out</button>
    
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
            isAuthorized: false
        }
    },
    mounted(){
        
        var self = this;

        Firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.isAuthorized = true;
                //Present shit
                console.log("User is logged in " + user);                
            }
            else {
                //Stay on login
                console.log("User is not logged in");
            }
        });
    },
    methods: {        
        signIn () {
            Firebase.auth().signInWithEmailAndPassword(this.email, this.password);
        },

        signOut() {
            Firebase.auth().signOut();
            this.isAuthorized = false;
        },
    }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
#app img {
    display: block;
    margin: 0 auto;
}
</style>
