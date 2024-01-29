/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import trashIcon from '../../../assets/svg/trash-icon.svg';
import editIcon from '../../../assets/svg/edit-icon.svg';
import createIcon from '../../../assets/svg/create-icon.svg'; 

import styles from './CollectionTable.module.css';

const CollectionTable = ({ collectionType, data, onEdit, onCreate, onDelete, onItemSelect, selectedItemId }) => {
  
  const handleEditClick = (itemId) => {
    onEdit(itemId);
  };

  const handleCreateClick = () => {
    onCreate();
  };

  const handleDeleteClick = (itemId) => {
    onDelete(itemId);
  };

  const handleItemClick = (itemId) => {
    onItemSelect(itemId);
  };

  return (
    <div className={styles['collection-table']}>
      <h2>{collectionType ? collectionType.charAt(0).toUpperCase() + collectionType.slice(1) : ''} List</h2>
      <button onClick={handleCreateClick} className={styles['create-button']}>
        <img src={createIcon} alt="Create" /> 
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {data.some(item => item.chefName) && <th>Chef</th>}
            {data.some(item => item.image) && <th>Image</th>}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item._id}
              className={`${selectedItemId === item._id ? styles['selected-item'] : ''}`}
              onClick={() => handleItemClick(item._id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{item._id}</td>
              <td>{item.name}</td>
              {item.chefName && <td>{item.chefName}</td>}
              {item.image && <td><img src={item.image} alt="Image" className={styles['has-image']} /></td>}
              <td>
                <button className={styles['edit-button']} onClick={() => handleEditClick(item._id)} disabled={selectedItemId === item._id}>
                  <img src={editIcon} alt="Edit" /> 
                </button>
                <button className={styles['delete-button']} onClick={() => handleDeleteClick(item._id)} disabled={selectedItemId === item._id}>
                  <img src={trashIcon} alt="Delete" /> 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CollectionTable;
