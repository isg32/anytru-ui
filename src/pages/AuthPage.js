import React, { useState } from 'react';
import '../styles/AuthPage.css';

function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="auth-page">
      <h1>{isRegister ? "Register" : "Sign In"}</h1>
      <form>
        {isRegister && <input type="text" placeholder="Name" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">{isRegister ? "Register" : "Sign In"}</button>
      </form>
      <button onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Sign In" : "Don't have an account? Register"}
      </button>
    </div>
  );
}

export default AuthPage;
