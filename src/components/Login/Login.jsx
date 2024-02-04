import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const API_URL = 'http://localhost:3001/api/v1/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encryptedPassword = btoa(password);
      const tokenResponse = await checkPassword(email, encryptedPassword);
      const { token } = tokenResponse.data;
      if (token) {
        sessionStorage.setItem('token', token);
        navigate('/');
        return;
      }
      setError('Invalid email or password');
    } catch (err) {
      setError('Invalid email or password'); 
    }
  };

  const checkPassword = async (email, password) => {
    try {
      return await axios.post(`${API_URL}users/check-password`, { email, password });
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  

  return (
    <div className={styles['body-login']}>
      <div className={styles['container-login']}>
        <h2 className={styles['h2-login']}>Login</h2>
        <form className={styles['form-login']} onSubmit={handleSubmit}>
          <div>
            <div className={styles['label-login']}>Email:</div>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className={styles['input-email-login']} />
          </div>
          <div>
            <div className={styles['label-login']}>Password:</div>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className={styles['input-password-login']} />
          </div>
          {error && <div className={styles['error-message-login']}>{error}</div>}
          <button type="submit" className={styles['button-login']}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
