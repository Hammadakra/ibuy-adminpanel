
import firebase from "firebase";
import 'firebase/auth';
var firebaseConfig = {
    apiKey: "AIzaSyAJXUTyRr-cLETKOJAtyvLl2fEZuxyMu20",
    authDomain: "adminpanel-34bde.firebaseapp.com",
    projectId: "adminpanel-34bde",
    storageBucket: "adminpanel-34bde.appspot.com",
    messagingSenderId: "169274726346",
    appId: "1:169274726346:web:697762729a8bacd81e6133",
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;
  const auth=firebase.auth();
  export {auth};

  // const signOut = ()  =>
  // {
    
  // }