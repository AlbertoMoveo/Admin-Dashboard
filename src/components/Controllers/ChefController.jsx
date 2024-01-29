import React from 'react';
import UploadWidget from '../Dashboard/EditForm/UploadWidget';
import { CHEF_RESOURCES } from '../../resources/Resources';

class ChefController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: CHEF_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{CHEF_RESOURCES.NAME}:</label>
        <input type="text" name={CHEF_RESOURCES.NAME.toLowerCase()} value={newItem[CHEF_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{CHEF_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{CHEF_RESOURCES.DESCRIPTION}:</label>
        <input type="text" name={CHEF_RESOURCES.DESCRIPTION.toLowerCase()} value={newItem[CHEF_RESOURCES.DESCRIPTION.toLowerCase()]} onChange={handleChange} />
        <label>{CHEF_RESOURCES.RESTAURANTS}:</label>
        <input type="text" name={CHEF_RESOURCES.RESTAURANTS.toLowerCase()} value={newItem[CHEF_RESOURCES.RESTAURANTS.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }

  
  static renderEditForm({ editedItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: CHEF_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{CHEF_RESOURCES.NAME}:</label>
        <input type="text" name={CHEF_RESOURCES.NAME.toLowerCase()} value={editedItem[CHEF_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{CHEF_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{CHEF_RESOURCES.DESCRIPTION}:</label>
        <input type="text" name={CHEF_RESOURCES.DESCRIPTION.toLowerCase()} value={editedItem[CHEF_RESOURCES.DESCRIPTION.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }
}

export default ChefController;
