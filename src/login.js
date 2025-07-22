import React, { useState } from 'react';
import { 
  auth 
} from './firebaseConfig'; // Importa a configuração do Firebase
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from "firebase/auth";

// --- Ícone do Google ---
const GoogleIcon = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
        <path fill="#4285F4" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#34A853" d="M43.611 20.083L42 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l5.657 5.657C40.058 36.318 44 30.657 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
        <path fill="#FBBC05" d="M10.222 28.427a11.956 11.956 0 0 1 0-8.854l-5.657-5.657A20.007 20.007 0 0 0 4 24c0 3.518 1.01 6.766 2.657 9.473l5.565-5.046z"></path>
        <path fill="#EA4335" d="M24 4c5.268 0 9.954 2.053 13.389 5.447l-5.657 5.657A11.956 11.956 0 0 1 24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12c5.221 0 9.604-3.344 11.303-8H24v-8h19.611c.251 1.267.389 2.576.389 3.917c0 6.657-3.942 12.318-9.268 15.447l-5.657-5.657A11.956 11.956 0 0 1 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12z"></path>
    </svg>
);


export default function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');

    const handleAuthAction = async (e) => {
        e.preventDefault();
        setError(''); // Limpa erros anteriores

        try {
            if (isRegistering) {
                // Se estiver registrando, cria um novo usuário
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                // Se estiver logando, faz o login
                await signInWithEmailAndPassword(auth, email, password);
            }
            // onLoginSuccess(); // Esta função será chamada pelo App.js
        } catch (err) {
            setError(getFriendlyErrorMessage(err.code));
        }
    };
    
    const handleGoogleLogin = async () => {
        setError('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            // onLoginSuccess(); // Esta função será chamada pelo App.js
        } catch (err) {
            setError(getFriendlyErrorMessage(err.code));
        }
    };
    
    // Traduz os códigos de erro do Firebase para mensagens amigáveis
    const getFriendlyErrorMessage = (code) => {
        switch (code) {
            case 'auth/invalid-email':
                return 'O formato do e-mail é inválido.';
            case 'auth/user-not-found':
            case 'auth/wrong-password':
                return 'E-mail ou senha incorretos.';
            case 'auth/email-already-in-use':
                return 'Este e-mail já está em uso.';
            case 'auth/weak-password':
                return 'A senha precisa ter pelo menos 6 caracteres.';
            case 'auth/popup-closed-by-user':
                return 'A janela de login com Google foi fechada.';
            default:
                return 'Ocorreu um erro. Tente novamente.';
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover' }}>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md m-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 font-display mb-2">
                    {isRegistering ? 'Crie sua Conta' : 'Acesse seu Painel'}
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    {isRegistering ? 'Para começar a planejar seu sonho.' : 'Bem-vindo(a) de volta!'}
                </p>
                
                <form onSubmit={handleAuthAction}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            E-mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"
                            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-pink-500"
                            required
                        />
                    </div>

                    {error && <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
                    >
                        {isRegistering ? 'Registrar' : 'Entrar'}
                    </button>
                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-500">ou</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button
                    onClick={handleGoogleLogin}
                    className="w-full flex items-center justify-center bg-white hover:bg-gray-100 text-gray-700 font-semibold py-3 px-4 border border-gray-300 rounded-lg shadow-sm transition duration-300"
                >
                    <GoogleIcon />
                    Entrar com Google
                </button>

                <p className="text-center text-gray-600 text-sm mt-6">
                    {isRegistering ? 'Já tem uma conta?' : 'Não tem uma conta?'}
                    <button
                        onClick={() => {
                            setIsRegistering(!isRegistering);
                            setError('');
                        }}
                        className="font-bold text-pink-500 hover:text-pink-700 ml-1"
                    >
                        {isRegistering ? 'Faça login' : 'Registre-se'}
                    </button>
                </p>
            </div>
        </div>
    );
}
