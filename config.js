import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDnRyj3nYzvYiyRkfzOKf5GZBbkj31Dqz4",
  authDomain: "anything-92c26.firebaseapp.com",
  projectId: "anything-92c26",
  storageBucket: "anything-92c26.appspot.com",
  messagingSenderId: "786000494430",
  appId: "1:786000494430:web:b7f574a4e845a479d2d9cf"
};

  if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
  };

export default firebase.firestore();
