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
        <input type="text" name={RESTAURANT_RESOURCES.NAME} value={newItem[RESTAURANT_RESOURCES.NAME]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{RESTAURANT_RESOURCES.RATING}:</label>
        <input type="number" name={RESTAURANT_RESOURCES.RATING} value={newItem[RESTAURANT_RESOURCES.RATING]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_ID}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_ID} value={newItem[RESTAURANT_RESOURCES.CHEF_ID]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_NAME} value={newItem[RESTAURANT_RESOURCES.CHEF_NAME]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.DISHES}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.DISHES} value={newItem[RESTAURANT_RESOURCES.DISHES]} onChange={handleChange} />

        <label>{RESTAURANT_RESOURCES.CHEF_ID}:</label>
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
        <input type="text" name={RESTAURANT_RESOURCES.NAME} value={editedItem[RESTAURANT_RESOURCES.NAME]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{RESTAURANT_RESOURCES.RATING}:</label>
        <input type="number" name={RESTAURANT_RESOURCES.RATING} value={editedItem[RESTAURANT_RESOURCES.RATING]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_ID}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_ID} value={editedItem[RESTAURANT_RESOURCES.CHEF_ID]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.CHEF_NAME}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.CHEF_NAME} value={editedItem[RESTAURANT_RESOURCES.CHEF_NAME]} onChange={handleChange} />
        <label>{RESTAURANT_RESOURCES.DISHES}:</label>
        <input type="text" name={RESTAURANT_RESOURCES.DISHES} value={editedItem[RESTAURANT_RESOURCES.DISHES]} onChange={handleChange} />
      </>
    );
  }
}

export default RestaurantController;
