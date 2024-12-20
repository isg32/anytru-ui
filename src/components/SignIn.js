import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    // Get the users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the user with matching email and password
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      // If user is authenticated, store user data in localStorage (session-like behavior)
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="auth-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
}

export default SignIn;
