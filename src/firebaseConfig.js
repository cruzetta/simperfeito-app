// Importa as funções necessárias do SDK do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDU3IGJzpm3QwCtqgh-zlALkTGmkWKolYY",
  authDomain: "simperfeito.firebaseapp.com",
  projectId: "simperfeito",
  storageBucket: "simperfeito.firebasestorage.app",
  messagingSenderId: "276559476496",
  appId: "1:276559476496:web:c811781762486bb5001795",
  measurementId: "G-CB5X7JY7Y6"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta o serviço de autenticação para ser usado em outros lugares do app
export const auth = getAuth(app);
