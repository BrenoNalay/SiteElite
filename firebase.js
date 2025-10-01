// -------- MENU MOBILE --------
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.querySelector('nav ul');

mobileMenuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.innerHTML = nav.classList.contains('active')
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// -------- LOGIN --------
const loginBtn = document.getElementById('login-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeLogin.addEventListener('click', () => {
  loginModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});

// -------- CADASTRO --------
const cadastroBtn = document.getElementById('cadastro-btn');
const cadastroModal = document.getElementById('cadastro-modal');
const closeCadastro = document.getElementById('close-cadastro');

cadastroBtn.addEventListener('click', () => {
  cadastroModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeCadastro.addEventListener('click', () => {
  cadastroModal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
  if (e.target === cadastroModal) {
    cadastroModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
