// Importa as funções que vamos usar do Firebase
// Usamos a versão 9 para ter um código mais moderno
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { 
    getAuth, 
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// IMPORTAÇÕES DO FIRESTORE (BASE DE DADOS)
import { 
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    query,
    where
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


// A configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDU3IGJzpm3QwCtqgh-zlALkTGmkWKolYY",
  authDomain: "simperfeito.com", // <-- ALTERAÇÃO IMPORTANTE AQUI
  projectId: "simperfeito",
  storageBucket: "simperfeito.firebasestorage.app",
  messagingSenderId: "276559476496",
  appId: "1:276559476496:web:c811781762486bb5001795",
  measurementId: "G-CB5X7JY7Y6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
// Inicializa a Autenticação
const auth = getAuth(app);
// Inicializa o provedor do Google
const googleProvider = new GoogleAuthProvider();
// INICIALIZA O FIRESTORE (BASE DE DADOS)
const db = getFirestore(app);


// Função para traduzir os erros do Firebase para mensagens mais fáceis de entender
const getFriendlyErrorMessage = (code) => {
    console.log("Firebase Auth Error Code:", code); // Adicionado para depuração
    switch (code) {
        case 'auth/invalid-email':
            return 'O formato do e-mail é inválido.';
        case 'auth/user-not-found':
        case 'auth/wrong-password':
        case 'auth/invalid-credential':
            return 'E-mail ou senha incorretos. Verifique seus dados и tente novamente.';
        case 'auth/email-already-in-use':
            return 'Este e-mail já está em uso.';
        case 'auth/weak-password':
            return 'A senha precisa ter pelo menos 6 caracteres.';
        case 'auth/popup-closed-by-user':
            return 'A janela de login com Google foi fechada antes da conclusão.';
        case 'auth/popup-blocked-by-browser': // Caso adicionado
            return 'O pop-up de login foi bloqueado pelo navegador. Por favor, habilite os pop-ups para este site.';
        case 'auth/operation-not-allowed': // Caso adicionado
            return 'O login com Google não está habilitado. Por favor, contacte o suporte.';
        case 'auth/too-many-requests':
            return 'O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login. Tente novamente mais tarde.';
        default:
            console.error("Código de erro não tratado:", code);
            return 'Ocorreu um erro desconhecido. Verifique sua conexão ou a configuração do Firebase.';
    }
};

// Disponibiliza (exporta) as funções e variáveis do Firebase para que outros scripts possam usá-las
export { 
    // Funções de Autenticação
    auth, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    googleProvider,
    signInWithPopup,
    getFriendlyErrorMessage,
    // Funções do Firestore (Base de dados)
    db,
    collection,
    addDoc,
    onSnapshot,
    query,
    where
};
