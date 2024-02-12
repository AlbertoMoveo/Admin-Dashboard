import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

import { ERROR_MESSAGES } from '../../resources/Resources';
import { ROUTES } from '../../Routes/Routes';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const API_URL = 'http://ec2-16-171-9-90.eu-north-1.compute.amazonaws.com:3001/api/v1/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const encryptedPassword = btoa(password);
      const tokenResponse = await checkPassword(email, encryptedPassword);
      const { token } = tokenResponse;
      if (token) {
        sessionStorage.setItem('token', token);
        navigate(ROUTES.HOMEPAGE);
        return;
      }
      setError(ERROR_MESSAGES.INVALID_CREDENTIALS);
    } catch (err) {
      setError(ERROR_MESSAGES.NETWORK_ERROR);
    }
  };

  const checkPassword = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}users/check-password`, { email, password });
      return response.data;
    } catch (err) {
      throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
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
