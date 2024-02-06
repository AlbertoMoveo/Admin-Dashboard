import React from 'react';
import styles from './Sidebar.module.css';
import { SIDEBAR_RESOURCES } from '../../../resources/Resources';

const Sidebar = ({ onSelectCollection, isOpen }) => {
  const renderSidebarItems = (resources) => {
    return Object.values(resources).map((resource, index) => (
      <li key={index} onClick={() => onSelectCollection(resource)}>
        {resource}
      </li>
    ));
  };

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <h2>Collections</h2>
      <ul>
        {renderSidebarItems(SIDEBAR_RESOURCES)}
      </ul>
    </div>
  );
};

export default Sidebar;