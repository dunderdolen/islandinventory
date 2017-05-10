<template>
    <main class="app">
        <div class="content"> 
            <transition name="fade">
                <div id="login-form-wrapper" v-if="!isAuthorized">
                    <h2>Logga in med din email och lösenord</h2>
                    <form id="login-form" v-on:submit.prevent="signIn">
                        <input v-model="email" type="email" placeholder="Email"></input>
                        <input v-model="password" type="password" placeholder="Password"></input>
                        <button type="submit">Logga in</button>
                        <div>{{errorMessage}}</div>
                    </form>
                </div>
           </transition>
           <!-- All component content will render here -->
           <router-view></router-view>
        </div>
        <transition name="fade">
          <Menu v-if="isAuthorized"></Menu>
        </transition>
    </main>
</template>
<script>
import db from './db'
import Firebase from 'firebase'
import Weather from '@/components/Weather/Weather.vue'
import Menu from '@/components/Menu/Menu.vue'
export default {
    name: 'app',
    data () {
        return {
            email: '',
            password: '',
            isAuthorized: false,
            errorMessage: ''
        }
    },
    mounted() {
        var self = this;
        Firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                self.isAuthorized = true;
                self.email = '';
                self.password = '';          
            }
        });
    },
    methods: {        
      signIn() {
          var self = this;
          Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
              var errorMessage = error.message;
              self.errorMessage = errorMessage;  
          });
      },
      signOut() {
          var self = this;
          Firebase.auth().signOut();
          self.isAuthorized = false;
          self.email = '';
          self.password = '';
          self.errorMessage = '';
      }
    }
  }
</script>

<style>
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
    font-family: Helvetica;
    list-style: none;
}
.app {
    background-color: white;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
}

.content {
    flex-grow: 1;
}

#login-form-wrapper {
    justify-content: center;
}

#login-form input, button {
    display: block;
    width: 85%;
    margin: 1rem auto;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>