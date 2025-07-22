import React, { useState } from 'react';
import LandingPage from './LandingPage';
import Dashboard from './Dashboard';
import './index.css'; // Garante que o Tailwind CSS é carregado

// --- Componente Principal da Aplicação ---
// A única responsabilidade do App.js agora é controlar qual página exibir.
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simula o login
  const handleLogin = () => setIsLoggedIn(true);
  // Simula o logout
  const handleLogout = () => setIsLoggedIn(false);

  return (
    // Renderiza o painel ou a landing page com base no estado de login
    isLoggedIn 
      ? <Dashboard onLogout={handleLogout} /> 
      : <LandingPage onLogin={handleLogin} />
  );
}
