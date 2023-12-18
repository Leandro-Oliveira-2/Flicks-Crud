// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDiD9azitPPfnTYGiuynjMxnWmXXXWizSc',
  authDomain: 'snetflix-e23f0.firebaseapp.com',
  projectId: 'snetflix-e23f0',
  storageBucket: 'snetflix-e23f0.appspot.com',
  messagingSenderId: '894512735645',
  appId: '1:894512735645:web:34b40dc7c2d7fa63abbb74',
  measurementId: 'G-LB7YHQM1CV',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const appAuth = getAuth(app)

const login = (email, password) => {
  return signInWithEmailAndPassword(appAuth, email, password)
}

const signUp = (email, password) => {
  return createUserWithEmailAndPassword(appAuth, email, password)
}

export { login, signUp }
