import React, { useState } from 'react';
import axios from 'axios';

const LoginAndRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = () => {
    
    axios.post('/api/auth', { isLogin: true, email, password })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  const handleRegister = () => {
    axios.post('/api/auth', { isLogin: false, name, email, password })
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error('Registration error:', error);
      });
  };

  return (
    <div>
      <h2>{isLogin ? 'Login' : 'Register'}</h2>
      {!isLogin && (
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
      )}
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      {isLogin ? (
        <button onClick={handleLogin}>Login</button>
      ) : (
        <button onClick={handleRegister}>Register</button>
      )}
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={handleToggleForm}>
          {isLogin ? 'Register here' : 'Login here'}
        </button>
      </p>
    </div>
  );
};

export default LoginAndRegister;
