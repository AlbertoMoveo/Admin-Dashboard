import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Unauthorized.module.css';

const UnauthorizedPage = () => {
  return (
    <div className={styles['body-unauthorized']}>
      <div className={styles['container-unauthorized']}>
        <h1 className={styles['h1-unauthorized']}>Unauthorized Access</h1>
        <p className={styles['p-unauthorized']}>Please log in to access this page.</p>
        <Link className={styles['link-unauthorized']} to="/login">Go to Login Page</Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
