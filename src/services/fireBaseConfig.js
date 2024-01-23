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
const getFavoriteMovies = async (userId) => {
  const userDocRef = doc(db, 'users', userId);

  try {
    // Obtenha os dados atuais do usuário
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();

    // Verifique se o array favoriteMovies já existe, se não, retorne uma array vazia
    const favoriteMovies = userData.favoriteMovies || [];
    return favoriteMovies;
  } catch (error) {
    console.error('Erro ao obter lista de filmes favoritos:', error);
    // Em vez de retornar null, você pode lançar um erro ou tomar outra ação apropriada conforme necessário.
    return null;
  }
};
const addMovieToFavorites = async (userId, movieId, movieName) => {
  const userDocRef = doc(db, 'users', userId);

  try {
    // Obtenha os dados atuais do usuário
    const userDocSnapshot = await getDoc(userDocRef);
    const userData = userDocSnapshot.data();

    // Verifique se o array favoriteMovies já existe, se não, crie-o
    const favoriteMovies = userData.favoriteMovies || [];

    // Verifique se o filme já está na lista de favoritos
    const existingMovieIndex = favoriteMovies.findIndex(movie => movie.id === movieId);

    if (existingMovieIndex === -1) {
      // Adicione o novo objeto à lista de favoritos
      favoriteMovies.push({ id: movieId, name: movieName });
      Alert('Filme adicionado aos favoritos com sucesso.');
    } else {
      // Remova o filme da lista de favoritos
      favoriteMovies.splice(existingMovieIndex, 1);
      Alert('Filme removido da lista de favoritos.');
    }

    // Atualize o documento do usuário no Firestore
    await setDoc(userDocRef, { favoriteMovies }, { merge: true });

  } catch (error) {
    console.error('Erro ao adicionar/remover filme dos favoritos:', error);
    Alert('Erro ao processar a operação.');
  }
};

const signInWithGoogle = async (router) => {
  try {
    const resultado = await signInWithPopup(getAuth(), googleProvider);
    console.log('entrei no resultado')
    console.log(resultado.user)
    const user = resultado.user;
    const userDocRef = doc(db, 'users', user.uid);

    // Verificar se o usuário já está cadastrado
    const userDocSnapshot = await getDoc(userDocRef);
    console.log(userDocRef)
    if (!userDocSnapshot.exists()) {
      // Se o usuário não estiver cadastrado, adicionar informações ao Firestore
      await setDoc(userDocRef, {
        nome: user.displayName,
        cpf: '',
        dataNascimento: '',
        favoriteMovies: [],
      });
      console.log('entreei no if')
      Alert(`Cadastro com Google bem-sucedido: ${user.displayName}`);
      const userData = {
        ...user, ...{
          nome: user.displayName,
          cpf: '',
          dataNascimento: '',
          favoriteMovies: [],
        }
      };
      localStorage.setItem('user', JSON.stringify(userData));
    } else {
      const userDocRef = doc(db, 'users', resultado.user.uid)
      const userDoc = await getDoc(userDocRef)
      const list = []
      if (userDoc.exists()) {
        const { favoriteMovies } = userDoc.data();
        console.log('favoriteMovies', favoriteMovies)
        if (favoriteMovies) {
          favoriteMovies.map((movie) => {
            list.push(movie);
          });
        }
      }
      console.log('Favoritos ^^')
      console.log(user)
      console.log('prints a cima')
      console.log('user', user.email)
      const userData = {
        ...{
          cpf: userDoc._document.data.value.mapValue.fields.cpf.stringValue,
          email: user.email,
          dataNascimento: userDoc._document.data.value.mapValue.fields.dataNascimento.stringValue,
          nome: user.displayName,
          favoriteMovies: list,
          uid: user.uid,
        }
      };
      localStorage.setItem('user', JSON.stringify(userData));
      Alert(`Login com Google bem-sucedido: ${user.displayName}`);

    }

    // Obter informações adicionais após login (pode ser necessário, dependendo da lógica do seu aplicativo

    // Definir as informações do usuário no localStorage
    // Redirecione para a página desejada
    return { success: true, message: `Login com Google bem-sucedido: ${user.displayName}` }, router.push('/movies');
  } catch (error) {
    console.error('Erro no login com Google:', error);
    return { success: false, message: 'Erro no login com Google' };
  }
};

const logout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    Alert('Usuário deslogado com sucesso.');
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
          resolve(user);
        } else {
          console.log('Usuário não autenticado');
          const currentRoute = router.currentRoute;

          if (currentRoute.path !== '/loginPage') {
            router.replace('/loginPage');
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


export { login, signUp, db, signInWithGoogle, signInWithFacebook, checkAuth, logout, getUser, addMovieToFavorites,getFavoriteMovies}