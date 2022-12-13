import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  
  apiKey: "AIzaSyBlOpmH4n4l6TdOWuVsSFrw3d4NtJlmhas",
  authDomain: "app-2-ed204.firebaseapp.com",
  projectId: "app-2-ed204",
  storageBucket: "app-2-ed204.appspot.com",
  messagingSenderId: "931087058770",
  appId: "1:931087058770:web:17371a8e17678795f19c8b"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
