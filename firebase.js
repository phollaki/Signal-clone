import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCG9a8F7bv-yhYmCgrasPkM759sH5lnh2g",
  authDomain: "signal-clone-ae25d.firebaseapp.com",
  projectId: "signal-clone-ae25d",
  storageBucket: "signal-clone-ae25d.appspot.com",
  messagingSenderId: "786607222084",
  appId: "1:786607222084:web:a5edc590daf3875617fb11",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
