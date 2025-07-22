import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Login from './Login'; // Importa a nova tela de Login
import { auth } from './firebaseConfig'; // Importa a autenticação do Firebase
import { onAuthStateChanged, signOut } from "firebase/auth";
import './index.css';

// --- Componente Principal da Aplicação ---
export default function App() {
  const [user, setUser] = useState(null); // Estado para guardar o usuário logado
  const [loading, setLoading] = useState(true); // Estado para mostrar carregamento inicial

  useEffect(() => {
    // Esta função do Firebase fica "ouvindo" se o status de login muda
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Atualiza o estado com o usuário atual (ou null)
      setLoading(false); // Termina o carregamento
    });

    // Limpa o "ouvinte" quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  // Função para fazer logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  // Enquanto verifica o status de login, mostra uma tela de carregamento
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-gray-600">Carregando...</p>
      </div>
    );
  }

  return (
    // Se tiver um usuário, mostra o Dashboard. Se não, mostra a tela de Login.
    user 
      ? <Dashboard onLogout={handleLogout} /> 
      : <Login />
  );
}
