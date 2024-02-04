import React from 'react';
import styles from './Sidebar.module.css';
import { SIDEBAR_RESOURCES } from '../../../resources/Resources';

const Sidebar = ({ onSelectCollection, isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <h2>Collections</h2>
      <ul>
        <li onClick={() => onSelectCollection('chef')}>{SIDEBAR_RESOURCES.CHEF}</li>
        <li onClick={() => onSelectCollection('restaurant')}>{SIDEBAR_RESOURCES.RESTAURANT}</li>
        <li onClick={() => onSelectCollection('dish')}>{SIDEBAR_RESOURCES.DISH}</li>
        <li onClick={() => onSelectCollection('user')}>{SIDEBAR_RESOURCES.USER}</li>
      </ul>
    </div>
  );
};

export default Sidebar;
