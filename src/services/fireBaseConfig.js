// prettier-ignore
// eslint-disable-next-line no-useless-catch
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
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
const db = getFirestore(app)

const login = (email, password) => {
  return signInWithEmailAndPassword(appAuth, email, password)
}

const signUp = async (email, password, additionalAttributes) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Cria o usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(appAuth, email, password)
    const user = userCredential.user

    // Adiciona atributos adicionais ao usuário no Firestore
    const userDocRef = doc(db, 'users', user.uid)
    await setDoc(userDocRef, additionalAttributes)

    return user
  } catch (error) {
    throw error
  }
}

export { login, signUp, db }
