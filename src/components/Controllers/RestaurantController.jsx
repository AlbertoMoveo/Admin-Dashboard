import React from 'react';
import UploadWidget from "../Dashboard/EditForm/UploadWidget";
import { RESTAURANT_RESOURCES } from '../../resources/Resources';

class RestaurantController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: RESTAURANT_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{RESTAURANT_RESOURCES.NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.NAME.toLowerCase()} value={newItem[RESTAURANT_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{RESTAURANT_RESOURCES.RATING}:</label>
        <input type="number" name={RESTAURANT_RESOURCES.RATING.toLowerCase()} value={newItem[RESTAURANT_RESOURCES.RATING.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_ID}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_ID.toLowerCase()} value={newItem[RESTAURANT_RESOURCES.CHEF_ID.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_NAME.toLowerCase()} value={newItem[RESTAURANT_RESOURCES.CHEF_NAME.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.DISHES}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.DISHES.toLowerCase()} value={newItem[RESTAURANT_RESOURCES.DISHES.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }

  static renderEditForm({ editedItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: RESTAURANT_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{RESTAURANT_RESOURCES.NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.NAME.toLowerCase()} value={editedItem[RESTAURANT_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{RESTAURANT_RESOURCES.RATING}:</label>
        <input type="number" name={RESTAURANT_RESOURCES.RATING.toLowerCase()} value={editedItem[RESTAURANT_RESOURCES.RATING.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_ID}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_ID.toLowerCase()} value={editedItem[RESTAURANT_RESOURCES.CHEF_ID.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_NAME.toLowerCase()} value={editedItem[RESTAURANT_RESOURCES.CHEF_NAME.toLowerCase()]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.DISHES}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.DISHES.toLowerCase()} value={editedItem[RESTAURANT_RESOURCES.DISHES.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }
}

export default RestaurantController;
