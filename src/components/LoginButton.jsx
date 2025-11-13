const LoginButton = () => (
  <button
    onClick={() => window.location.href = "http://localhost:5000/login"}
    className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition"
  >
    Conectar com Google Fit
  </button>
);

export default LoginButton;