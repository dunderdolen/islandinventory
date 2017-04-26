<template>
    <main class="everywhere">
        <div class="content">
            <!-- v-model is used for TWO way binding. v-bind is one way binding -->
            <h2 id="welcome-text" v-if="!isAuthorized">Logga in med din email och lösenord</h2>
            <form class="todo" id="login-form" v-if="!isAuthorized" v-on:submit.prevent="signIn">
                <input v-model="email" type="email" placeholder="Email"></input>
                <input v-model="password" type="password" placeholder="Password"></input>
                <button type="submit" v-bind:buttonMsg='buttonMsg'>{{ buttonMsg }}</button>
            </form>
            <router-view></router-view>
        </div>
        <div v-if="isAuthorized">
            <div id="menu">
                <ul>
                    <li><router-link to="/home">Hem</router-link></li>
                    <li><router-link to="/create">Skapa</router-link></li>
                    <li><router-link to="/list">Lista</router-link></li>
                </ul>
            </div>
        </div>
    </main>
</template>

<script>
import db from './db'
import Firebase from 'firebase'
var today = new Date();
console.log(today);

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

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video{
    margin: 0;
    padding: 0;
    font-family: $font;
    list-style: none;
}
.everywhere {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}
.content {
    flex-grow: 1;
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

#menu{
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
            a {
                display: block;
                padding: 20px;
                border: 1px solid red;
            }
        }
    }
}


</style>
