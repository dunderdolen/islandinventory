import db from '../db'
import Firebase from 'firebase'
var today = new Date();
console.log(today);

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