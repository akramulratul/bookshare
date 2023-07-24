import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDuWdKEYY0p_z4UNeXaCwQMvXXUkRggLSQ",
  authDomain: "bookshare-f7276.firebaseapp.com",
  projectId: "bookshare-f7276",
  storageBucket: "bookshare-f7276.appspot.com",
  messagingSenderId: "1097775035940",
  appId: "1:1097775035940:web:a4311fda2690ce6ea70ab1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
