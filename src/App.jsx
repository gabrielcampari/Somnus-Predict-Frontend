import React, { useState } from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  // Estado para simular login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  // Redireciona para login do Google ao clicar
  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      window.location.href = "http://localhost:5000/login";
    }, 800); // pequena animação de loading
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <Header />
      {!isLoggedIn ? (
        <div className="flex flex-col items-center w-full max-w-md p-8 bg-white rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">Bem-vindo ao Somnus Predict</h2>
          <p className="text-gray-700 mb-6 text-center">
            Plataforma para monitoramento preditivo da Apneia do Sono.<br />
            Conecte-se com o Google Fit para começar!
          </p>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition mb-4 text-lg font-semibold"
            disabled={loading}
          >
            {loading ? "Carregando..." : "Entrar com Google Fit"}
          </button>
          <p className="text-gray-500 text-sm">Seus dados são protegidos e usados apenas para análise preditiva.</p>
        </div>
      ) : (
        <Dashboard />
      )}
    </div>
  );
}

export default App;