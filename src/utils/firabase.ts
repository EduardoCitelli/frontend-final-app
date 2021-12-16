import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebaseConfig from '../config/firebase';

const Firebase = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default Firebase;