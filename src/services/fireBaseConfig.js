// prettier-ignore
// eslint-disable-next-line no-useless-catch
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import router from '@/router'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: 'AIzaSyDiD9azitPPfnTYGiuynjMxnWmXXXWizSc',
  authDomain: 'snetflix-e23f0.firebaseapp.com',
  projectId: 'snetflix-e23f0',
  storageBucket: 'snetflix-e23f0.appspot.com',
  messagingSenderId: '894512735645',
  appId: '1:894512735645:web:34b40dc7c2d7fa63abbb74',
  measurementId: 'G-LB7YHQM1CV',
}


const app = initializeApp(firebaseConfig)
const appAuth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider();
const Facebookprovider = new FacebookAuthProvider();
const login = (email, password) => {
  return signInWithEmailAndPassword(appAuth, email, password)
}

const signUp = async (email, password, additionalAttributes) => {
  // eslint-disable-next-line no-useless-catch
  try {
    // Cria o usuário no Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(appAuth, email, password)
    const user = userCredential.user
    const userDocRef = doc(db, 'users', user.uid)
    await setDoc(userDocRef, additionalAttributes)

    return user
  } catch (error) {
    throw error
  }
}

const signInWithGoogle = async (router) => {
  try {
    const resultado = await signInWithPopup(getAuth(), googleProvider);
    const user = resultado.user;
    console.log('Login com Google bem-sucedido:', user);
    router.push('/movies')
  } catch (erro) {
    console.error('Erro no login com Google:', erro);
  }
};

const logout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    console.log('Usuário deslogado com sucesso.');
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
  }
};

const checkAuth = async () => {
  try {
    return await new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(appAuth, (user) => {
        unsubscribe();

        if (user) {
          console.log('Usuário autenticado:', user);
          resolve(user);
        } else {
          console.log('Usuário não autenticado');
          const currentRoute = router.currentRoute;

          if (currentRoute.path !== '/loginPage') {
            router.push('/loginPage');
          }
          reject(new Error('Usuário não autenticado'));
        }
      });
    });
  } catch (error) {
    console.error('Erro ao verificar autenticação:', error);
    throw error;
  }
};

const signInWithFacebook = async (router) => {
  try {
    const resultado = await signInWithPopup(getAuth(), Facebookprovider);
    const user = resultado.user;
    console.log('Login com Facebook bem-sucedido:', user);
    router.push('/movies')
  } catch (erro) {
    console.error('Erro no login com Facebook:', erro);
  }
}


export { login, signUp, db, signInWithGoogle, signInWithFacebook, checkAuth, logout }
