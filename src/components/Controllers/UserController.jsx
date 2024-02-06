import React from 'react';
import { USER_RESOURCES } from '../../resources/Resources';

class UserController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleAdminChange = (e) => {
      const value = e.target.value === 'true';
      handleChange({ target: { name: USER_RESOURCES.ADMIN, value } });
    };
    const fields=[{name: USER_RESOURCES.NAME, type:'text'},{name: USER_RESOURCES.SURNAME, type:'text'},{name: USER_RESOURCES.EMAIL, type:'text'},{name: USER_RESOURCES.PASSWORD, type:'text'}]

    return (
      <>
      {fields.map((field)=><>
        <label>{field.name}:</label>
        <input type={field.type}name={field.name} value={newItem[field.name]} onChange={handleChange} />
      </>)}
    <select name={USER_RESOURCES.ADMIN} value={newItem[USER_RESOURCES.ADMIN]} onChange={handleAdminChange}>
        <option value={'false'}>False</option>
        <option value={'true'}>True</option>
        </select>
      </>
    );
  }

  static renderEditForm({ editedItem, handleChange }) {
    const handleAdminChange = (e) => {
      const value = e.target.value === 'true';
      handleChange({ target: { name: USER_RESOURCES.ADMIN, value } });
    };

    return (
      <>
        <label>{USER_RESOURCES.NAME}:</label>
        <input type="text" name={USER_RESOURCES.NAME} value={editedItem[USER_RESOURCES.NAME]} onChange={handleChange} />
        <label>{USER_RESOURCES.SURNAME}:</label>
        <input type="text" name={USER_RESOURCES.SURNAME} value={editedItem[USER_RESOURCES.SURNAME]} onChange={handleChange} />
        <label>{USER_RESOURCES.EMAIL}:</label>
        <input type="text" name={USER_RESOURCES.EMAIL} value={editedItem[USER_RESOURCES.EMAIL]} onChange={handleChange} />
        <label>{USER_RESOURCES.PASSWORD}:</label>
        <input type="text" name={USER_RESOURCES.PASSWORD} value={editedItem[USER_RESOURCES.PASSWORD]} onChange={handleChange} />
        <label>{USER_RESOURCES.ADMIN}:</label>
        <select name={USER_RESOURCES.ADMIN} value={editedItem[USER_RESOURCES.ADMIN]} onChange={handleAdminChange}>
        <option value={'false'}>False</option>
        <option value={'true'}>True</option>
        </select>
      </>
    );
  }
}

export default UserController;
