import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBdrml5SQC6sGW1AeAEMxFnlXvX84izaPg",
    authDomain: "islandinventory-98ed2.firebaseapp.com",
    databaseURL: "https://islandinventory-98ed2.firebaseio.com"
}
const firebaseApp = Firebase.initializeApp(config)
const db = firebaseApp.database()
export default db
