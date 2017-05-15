import db from '../../db'
import Firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      isAuthorized: false,
      errorMessage: ''
    }
  },
  methods: {        
    signIn() {
      var self = this;
      Firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        var errorMessage = error.message;
        self.errorMessage = errorMessage;  
      });
    },
  }
}