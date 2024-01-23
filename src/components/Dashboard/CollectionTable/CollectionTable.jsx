import React from 'react';

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
        Create New Entry
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
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
              <td>
                <button className={styles['edit-button']} onClick={() => handleEditClick(item._id)} disabled={selectedItemId === item._id}>
                  Edit
                </button>
                <button className={styles['delete-button']} onClick={() => handleDeleteClick(item._id)} disabled={selectedItemId === item._id}>
                  Delete
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
