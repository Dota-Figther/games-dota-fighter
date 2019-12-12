import firebase from 'firebase/app'
import 'firebase/firestore'

require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyATi4KUlG6cAiMdMwAWuNPzJjC4oSBTcYs",
    authDomain: "dota-fighter.firebaseapp.com",
    databaseURL: "https://dota-fighter.firebaseio.com",
    projectId: "dota-fighter",
    storageBucket: "dota-fighter.appspot.com",
    messagingSenderId: "1055422479844",
    appId: "1:1055422479844:web:9caca53589a291ea69dbf1"
  };

  firebase.initializeApp(firebaseConfig)

  module.exports = firebase