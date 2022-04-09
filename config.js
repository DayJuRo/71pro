import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyDL7x5kSgL-RyoUOLXpMlqhRhW7P0ja9qY",
  authDomain: "complaints-forum-b2fc7.firebaseapp.com",
  projectId: "complaints-forum-b2fc7",
  storageBucket: "complaints-forum-b2fc7.appspot.com",
  messagingSenderId: "275799127530",
  appId: "1:275799127530:web:23c4ba4a9bf810c4722e93"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

