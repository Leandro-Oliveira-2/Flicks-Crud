// prettier-ignore
// eslint-disable-next-line no-useless-catch
import { initializeApp } from 'firebase/app'
import { getAuth, signOut, collection, getDocs, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { getFirestore, setDoc, doc, getDoc } from 'firebase/firestore'
import router from '@/router'
import Alert from '@/utils/Alert'
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
const getUser = () => {
  const usersCollection = collection(db, 'users');
  const querySnapshot = getDocs(usersCollection);
  return console.log(querySnapshot)
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

const addMovieToFavorites = async (userId, movieId, movieName) => {
  const userDocRef = doc(db, 'users', userId);

  try {
    // Obtenha os dados atuais do usuário
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();

    // Verifique se o array favoriteMovies já existe, se não, crie-o
    const favoriteMovies = userData.favoriteMovies || [];

    // Verifique se o filme já está na lista de favoritos
    const isMovieAlreadyAdded = favoriteMovies.some(movie => movie.id === movieId);

    if (!isMovieAlreadyAdded) {
      // Adicione o novo objeto à lista de favoritos
      favoriteMovies.push({ id: movieId, name: movieName });

      // Atualize o documento do usuário no Firestore
      await setDoc(userDocRef, { favoriteMovies }, { merge: true });

      Alert('Filme adicionado aos favoritos com sucesso.');
    } else {
      Alert('Filme já está na lista de favoritos.');
    }
  } catch (error) {
    console.error('Erro ao adicionar filme aos favoritos:', error);
  }
};


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
            window.location.href = '/loginPage';
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


export { login, signUp, db, signInWithGoogle, signInWithFacebook, checkAuth, logout, getUser, addMovieToFavorites }