<template>
    <div class="wrapper">
        <img id="logo" src="http://placehold.it/250x150"/>
        <!-- v-model is used for TWO way binding. v-bind is one way binding -->
        <h2 id="welcome-text">Logga in med din email och lösenord</h2>
        <form class="two-by-two" id="login-form" v-if="!isAuthorized" v-on:submit.prevent="signIn">
            <input v-model="email" type="email" placeholder="Email"></input>
            <input v-model="password" type="password" placeholder="Password"></input>
            <button type="submit" v-bind:buttonMsg='buttonMsg' v-on:click="signIn">{{ buttonMsg }}</button>
        </form>
        <div v-if="isAuthorized">
            <Welcome></Welcome>
            <button v-on:click="signOut" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</button>
        </div>
    </div>
</template>

<script>
    import Firebase from 'firebase'

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
.wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}

#logo { grid-column: 2 / 3; }
#welcome-text {
    grid-column: 2 / 3;
    grid-row: 2;
}
.two-by-two {
    grid-column: 2;
    grid-row: 3;
    grid-gap: 2px;
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
