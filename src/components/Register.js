import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import navigate function from react-router-dom
import '../styles/Auth.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Initialize the navigate function

  const handleRegister = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
      alert('User already exists!');
      return;
    }

    const newUser = { name, email, password };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    // Redirect to the SignIn page after successful registration
    navigate('/');
  };

  return (
    <div className='auth-container'>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <p>Have an account? <a href="/">SignIn</a></p>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default Register;
