
import firebase from "firebase";
import 'firebase/auth';
// var firebaseConfig = {
//     apiKey: "AIzaSyAJXUTyRr-cLETKOJAtyvLl2fEZuxyMu20",
//     authDomain: "adminpanel-34bde.firebaseapp.com",
//     projectId: "adminpanel-34bde",
//     storageBucket: "adminpanel-34bde.appspot.com",
//     messagingSenderId: "169274726346",
//     appId: "1:169274726346:web:697762729a8bacd81e6133",
//   };

var firebaseConfig = {
  apiKey: "AIzaSyAeTgoFKOHd-sidLlHwHXWVTdyFSHIzDho",
  authDomain: "ibuy-ed180.firebaseapp.com",
  databaseURL: "https://ibuy-ed180-default-rtdb.firebaseio.com",
  projectId: "ibuy-ed180",
  storageBucket: "ibuy-ed180.appspot.com",
  messagingSenderId: "77552665299",
  appId: "1:77552665299:web:427df979f19ddb6b088a26",
  measurementId: "G-6R2614B2F5"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;
  const auth=firebase.auth();
  export {auth};

  // const signOut = ()  =>
  // {
    
  // }