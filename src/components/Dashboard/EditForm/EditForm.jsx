import React, { useState, useEffect, useCallback } from 'react';

import ChefController from '../../Controllers/ChefController';
import DishController from '../../Controllers/DishController';
import RestaurantController from '../../Controllers/RestaurantController';
import { ICON_RESOURCES } from '../../../resources/Resources';

import styles from './EditForm.module.css';

const controllerMap = {
  chef: ChefController,
  dish: DishController,
  restaurant: RestaurantController,
};

const EditForm = ({ selectedItem, onSave, onCancel, objectType }) => {
  const [editedItem, setEditedItem] = useState({ ...selectedItem });

  useEffect(() => {
    setEditedItem({ ...selectedItem });
  }, [selectedItem]);

  const renderInputFields = useCallback(() => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
    };
    const selectedController = controllerMap[objectType];
    if (!selectedController) {
      console.error('Unsupported object type:', objectType);
      return null;
    }
    return <selectedController.renderEditForm editedItem={editedItem} handleChange={handleChange} />;
  }, [objectType, editedItem]);

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <div className={styles['edit-form']}>
      <h2>{ICON_RESOURCES.EDIT} {editedItem.name}</h2>
      <form>
        {renderInputFields()}
        <button type="button" onClick={handleSave} className={styles['edit-button']} >
          {ICON_RESOURCES.SAVE}
        </button>
        <button type="button" onClick={onCancel} className={styles['delete-button']}>
          {ICON_RESOURCES.CANCEL}
        </button>
      </form>
    </div>
  );
};

export default EditForm;
