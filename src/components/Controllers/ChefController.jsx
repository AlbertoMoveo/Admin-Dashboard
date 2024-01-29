import React from 'react';
import UploadWidget from '../Dashboard/EditForm/UploadWidget';

class ChefController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: 'image', value: imageUrl } });
    };

    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Description:</label>
        <input type="text" name="description" value={newItem.description} onChange={handleChange} />
        <label>Restaurants:</label>
        <input type="text" name="restaurants" value={newItem.restaurants} onChange={handleChange} />
      </>
    );
  }

  
  static renderEditForm({ editedItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: 'image', value: imageUrl } });
    };

    return (
      <>
        <label>Name:</label>
        <input type="text" name="name" value={editedItem.name} onChange={handleChange} />
        <label>Image:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>Description:</label>
        <input type="text" name="description" value={editedItem.description} onChange={handleChange} />
      </>
    );
  }
}

export default ChefController;
