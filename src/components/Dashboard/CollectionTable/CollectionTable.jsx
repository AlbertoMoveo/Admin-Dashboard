import React from 'react';
import trashIcon from '../../../assets/svg/trash-icon.svg';
import editIcon from '../../../assets/svg/edit-icon.svg';
import createIcon from '../../../assets/svg/create-icon.svg';
import { GENERAL_RESOURCES } from '../../../resources/Resources';

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
        <img src={createIcon} alt={GENERAL_RESOURCES.CREATE} /> 
      </button>
      <table>
        <thead>
          <tr>
            <th>{GENERAL_RESOURCES.ID}</th>
            <th>{GENERAL_RESOURCES.NAME}</th>
            {data.some(item => item.chefName) && <th>{GENERAL_RESOURCES.CHEF}</th>}
            {data.some(item => item.image) && <th>{GENERAL_RESOURCES.IMAGE}</th>}
            {data.some(item => item.admin !== undefined) && <th>{GENERAL_RESOURCES.ADMIN}</th>}
            <th>{GENERAL_RESOURCES.ACTION}</th>
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
              {item.admin !== undefined && <td>{item.admin ? 'Admin' : 'User'}</td>}
              {item.image && (
                <td>
                  <img src={item.image} alt={GENERAL_RESOURCES.IMAGE} className={styles['has-image']} />
                </td>
              )}
              <td>
                <button className={styles['edit-button']} onClick={() => handleEditClick(item._id)} disabled={selectedItemId === item._id}>
                  <img src={editIcon} alt={GENERAL_RESOURCES.EDIT} /> 
                </button>
                <button className={styles['delete-button']} onClick={() => handleDeleteClick(item._id)} disabled={selectedItemId === item._id}>
                  <img src={trashIcon} alt={GENERAL_RESOURCES.DELETE} /> 
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



