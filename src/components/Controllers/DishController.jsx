import React from 'react';
import UploadWidget from "../Dashboard/EditForm/UploadWidget";
import { DISH_RESOURCES } from '../../resources/Resources';

class DishController {

  static renderCreateForm({ newItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: DISH_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{DISH_RESOURCES.NAME}:</label>
        <input type="text" name={DISH_RESOURCES.NAME.toLowerCase()} value={newItem[DISH_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.PRICE}:</label>
        <input type="number" name={DISH_RESOURCES.PRICE.toLowerCase()} value={newItem[DISH_RESOURCES.PRICE.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.RESTAURANT}:</label>
        <input type="text" name={DISH_RESOURCES.RESTAURANT.toLowerCase()} value={newItem[DISH_RESOURCES.RESTAURANT.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{DISH_RESOURCES.TAGS}:</label>
        <input type="text" name={DISH_RESOURCES.TAGS.toLowerCase()} value={newItem[DISH_RESOURCES.TAGS.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.DESCRIPTION}:</label>
        <input type="text" name={DISH_RESOURCES.DESCRIPTION.toLowerCase()} value={newItem[DISH_RESOURCES.DESCRIPTION.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }

  static renderEditForm({ editedItem, handleChange }) {
    const handleImageUploadSuccess = (imageUrl) => {
      handleChange({ target: { name: DISH_RESOURCES.IMAGE, value: imageUrl } });
    };

    return (
      <>
        <label>{DISH_RESOURCES.NAME}:</label>
        <input type="text" name={DISH_RESOURCES.NAME.toLowerCase()} value={editedItem[DISH_RESOURCES.NAME.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.PRICE}:</label>
        <input type="number" name={DISH_RESOURCES.PRICE.toLowerCase()} value={editedItem[DISH_RESOURCES.PRICE.toLowerCase()]} onChange={handleChange} />
        <label>{DISH_RESOURCES.IMAGE}:</label>
        <UploadWidget onSuccess={handleImageUploadSuccess} />
        <label>{DISH_RESOURCES.DESCRIPTION}:</label>
        <input type="text" name={DISH_RESOURCES.DESCRIPTION.toLowerCase()} value={editedItem[DISH_RESOURCES.DESCRIPTION.toLowerCase()]} onChange={handleChange} />
      </>
    );
  }
}

export default DishController;
