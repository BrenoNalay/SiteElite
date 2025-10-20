// Importações principais do Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrlGdGVsIMCjrzXL-h5_N5mVvcQNleaaU",
  authDomain: "siteelitecorp.firebaseapp.com",
  projectId: "siteelitecorp",
  storageBucket: "siteelitecorp.firebasestorage.app",
  messagingSenderId: "752645002095",
  appId: "1:752645002095:web:62179dc184489ca5ae8e9a",
  measurementId: "G-8DP6R168KV"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

// Inicializa autenticação
const auth = getAuth(app);

// -------- CADASTRO --------
const cadastroForm = document.getElementById("cadastro-form");
if (cadastroForm) {
  cadastroForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("cadastro-email").value;
    const senha = document.getElementById("cadastro-password").value;

    try {
      // Cria usuário no Firebase Auth
      await createUserWithEmailAndPassword(auth, email, senha);
      alert("✅ Usuário cadastrado com sucesso!");
      window.location.href = "login.html";
    } catch (error) {
      alert("❌ Erro ao cadastrar: " + error.message);
    }
  });
}

// -------- LOGIN --------
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-password").value;

    try {
      // Faz login no Firebase Auth
      await signInWithEmailAndPassword(auth, email, senha);
      alert("✅ Login realizado com sucesso!");
      window.location.href = "index.html";
    } catch (error) {
      alert("❌ Erro ao logar: " + error.message);
    }
  });
}
