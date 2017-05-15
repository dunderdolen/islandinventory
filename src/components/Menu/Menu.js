import Firebase from 'firebase'
export default {
  name: 'menu',
  methods: {
    signOut() {
      Firebase.auth().signOut();
    }
  }
}