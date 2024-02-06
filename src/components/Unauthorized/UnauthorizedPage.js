import React from 'react';
import { Link } from 'react-router-dom';
import { UNAUTHORIZED_RESOURCES } from '../../resources/Resources';
import styles from './Unauthorized.module.css';

const UnauthorizedPage = () => {
  return (
    <div className={styles['body-unauthorized']}>
      <div className={styles['container-unauthorized']}>
        <h1 className={styles['h1-unauthorized']}>{UNAUTHORIZED_RESOURCES.UNAUTHORIZED_PAGE_TITLE}</h1>
        <p className={styles['p-unauthorized']}>{UNAUTHORIZED_RESOURCES.UNAUTHORIZED_PAGE_MESSAGE}</p>
        <Link className={styles['link-unauthorized']} to="/login">{UNAUTHORIZED_RESOURCES.LOGIN_PAGE_LINK_TEXT}</Link>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
