<template>
    <main class="app">
        <div class="content"> 
            <transition name="fade">
               <Login v-if="!isAuthorized"></Login>
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

import Login from '@/components/Login/Login.vue'
import Menu from '@/components/Menu/Menu.vue'
import Firebase from 'firebase'
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
            }else {
                self.isAuthorized = false;
            }
        });   
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>