<template>
  <div>
    
  </div>
</template>
 

<script>
import firebase from './firebase'
var config = {
  apiKey: "AIzaSyBdrml5SQC6sGW1AeAEMxFnlXvX84izaPg",
  authDomain: "islandinventory-98ed2.firebaseapp.com",
  databaseURL: "https://islandinventory-98ed2.firebaseio.com",
  storageBucket: "islandinventory-98ed2.appspot.com",
  messagingSenderId: "338111248721"
};

console.log(firebase.initializeApp(config));
var itemRef = firebase.database().ref("test");
console.log(itemRef);

export default {
  
}
</script>

<style>

</style>
