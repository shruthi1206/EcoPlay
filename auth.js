// =========================================
// EcoPlay Authentication Script
// Save this file as: auth.js
// =========================================

// ---------- TAB SWITCHING ----------
function switchTab(mode) {
  const tabs = document.querySelectorAll('.tab');
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const message = document.getElementById('message');

  // Remove active class from all tabs
  tabs.forEach(tab => tab.classList.remove('active'));

  if (mode === 'login') {
    // Activate Login tab
    tabs[0].classList.add('active');

    // Show login form
    loginForm.classList.remove('hidden');

    // Hide signup form
    signupForm.classList.add('hidden');
  } else {
    // Activate Signup tab
    tabs[1].classList.add('active');

    // Show signup form
    signupForm.classList.remove('hidden');

    // Hide login form
    loginForm.classList.add('hidden');
  }

  // Clear messages
  if (message) {
    message.textContent = '';
    message.style.color = 'white';
  }
}

// ---------- SHOW MESSAGE ----------
function showMessage(text, color) {
  const message = document.getElementById('message');
  if (!message) return;

  message.textContent = text;
  message.style.color = color;
}

// ---------- SIGNUP FUNCTION ----------
function signup() {
  const name = document.getElementById('signupName').value.trim();
  const email = document.getElementById('signupEmail').value.trim();
  const password = document.getElementById('signupPassword').value.trim();

  // Validation
  if (!name || !email || !password) {
    showMessage('Please fill all fields.', '#fca5a5');
    return;
  }

  // Get existing users
  const users = JSON.parse(localStorage.getItem('ecoUsers')) || [];

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);

  if (existingUser) {
    showMessage('Account already exists. Please log in.', '#fbbf24');
    return;
  }

  // Add new user
  users.push({
    name: name,
    email: email,
    password: password
  });

  // Save users
  localStorage.setItem('ecoUsers', JSON.stringify(users));

  // Success message
  showMessage('Account created successfully! Please log in.', '#86efac');

  // Clear signup fields
  document.getElementById('signupName').value = '';
  document.getElementById('signupEmail').value = '';
  document.getElementById('signupPassword').value = '';

  // Switch to login tab after delay
  setTimeout(() => {
    switchTab('login');
  }, 1500);
}

// ---------- LOGIN FUNCTION ----------
function login() {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();

  // Validation
  if (!email || !password) {
    showMessage('Please enter email and password.', '#fca5a5');
    return;
  }

  // Get users
  const users = JSON.parse(localStorage.getItem('ecoUsers')) || [];

  // Find matching user
  const user = users.find(
    u => u.email === email && u.password === password
  );

  // Invalid login
  if (!user) {
    showMessage('Invalid email or password.', '#fca5a5');
    return;
  }

  // Save logged-in user info
  localStorage.setItem('ecoUser', user.name);
  localStorage.setItem('ecoUserEmail', user.email);

  // Success message
  showMessage('Login successful! Redirecting...', '#86efac');

  // Redirect to dashboard
  setTimeout(() => {
    window.location.href = 'dashboard.html';
  }, 1000);
}

// ---------- CHECK AUTHENTICATION ----------
function checkAuth() {
  const username = localStorage.getItem('ecoUser');

  // Redirect if not logged in
  if (!username) {
    window.location.href = 'login.html';
  }

  return username;
}

// ---------- LOGOUT FUNCTION ----------
function logout() {
  localStorage.removeItem('ecoUser');
  localStorage.removeItem('ecoUserEmail');

  // Redirect to login page
  window.location.href = 'login.html';
}

// ---------- AUTO INITIALIZATION ----------
document.addEventListener('DOMContentLoaded', () => {
  // If login page contains tabs, initialize them
  const tabs = document.querySelectorAll('.tab');

  if (tabs.length > 0) {
    switchTab('login');
  }
});