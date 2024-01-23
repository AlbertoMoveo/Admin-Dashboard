import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onSelectCollection, isOpen }) => {
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <h2>Collections</h2>
      <ul>
        <li onClick={() => onSelectCollection('chef')}>Chef</li>
        <li onClick={() => onSelectCollection('restaurant')}>Restaurant</li>
        <li onClick={() => onSelectCollection('dish')}>Dish</li>
      </ul>
    </div>
  );
};

export default Sidebar;
