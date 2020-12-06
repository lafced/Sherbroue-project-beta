import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDu18spMo8snmGoaTVdCJylN4C91UsjQaU",
    authDomain: "sherbroue-website.firebaseapp.com",
    projectId: "sherbroue-website",
    storageBucket: "sherbroue-website.appspot.com",
    messagingSenderId: "977869530086",
    appId: "1:977869530086:web:7538ff82a41fd4d0be6c27",
    measurementId: "G-12CX3Q2C6F"
  };



export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userRef;
}



firebase.initializeApp(firebaseConfig);




export const auth = firebase.auth();
export const firestore = firebase.firestore();





export default firebase;