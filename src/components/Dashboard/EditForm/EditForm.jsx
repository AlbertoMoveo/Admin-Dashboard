import React, { useState, useEffect, useCallback } from 'react';

import ChefController from '../../Controllers/ChefController';
import DishController from '../../Controllers/DishController';
import RestaurantController from '../../Controllers/RestaurantController';
import { GENERAL_RESOURCES } from '../../../resources/Resources';

import styles from './EditForm.module.css';
import UserController from '../../Controllers/UserController';

const controllerMap = {
  chef: ChefController,
  dish: DishController,
  restaurant: RestaurantController,
  user: UserController
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
      return null;
    }
    return <selectedController.renderEditForm editedItem={editedItem} handleChange={handleChange} />;
  }, [objectType, editedItem]);

  const handleSave = () => {
    onSave(editedItem);
  };

  return (
    <div className={styles['edit-form']}>
      <h2>{GENERAL_RESOURCES.EDIT} {editedItem.name}</h2>
      <form>
        {renderInputFields()}
        <button type="button" onClick={handleSave} className={styles['edit-button']} >
          {GENERAL_RESOURCES.SAVE}
        </button>
        <button type="button" onClick={onCancel} className={styles['delete-button']}>
          {GENERAL_RESOURCES.CANCEL}
        </button>
      </form>
    </div>
  );
};

export default EditForm;
