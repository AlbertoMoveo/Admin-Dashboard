import React, { useState, useCallback, useMemo } from 'react';

import ChefController from '../../Controllers/ChefController';
import DishController from '../../Controllers/DishController';
import RestaurantController from '../../Controllers/RestaurantController';

import styles from './CreateForm.module.css';

const controllerMap = {
  chef: ChefController,
  dish: DishController,
  restaurant: RestaurantController,
};

const CreateForm = ({ onSave, onCancel, objectType }) => {
  const initialNewItem = {};
  const selectedController =  useMemo(()=>controllerMap[objectType],[objectType]) 
  const [newItem, setNewItem] = useState({ ...initialNewItem });

  const renderInputFields = useCallback(() => {

    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
    };

    if (!selectedController) {
      console.error('Unsupported object type:', objectType);
      return null;
    }
    return selectedController.renderCreateForm({ newItem, handleChange });
  }, [selectedController, newItem, objectType]);

  const handleCreate = () => {
    onSave(newItem);
    setNewItem({ ...initialNewItem });
  };


  return (
    <div className={styles['create-form']}>
      <h2>Create New {objectType.charAt(0).toUpperCase() + objectType.slice(1)}</h2>
      <form>
        {renderInputFields()}
        <button type="button" onClick={handleCreate} className={styles['create-button']}>
          Create
        </button>
        <button type="button" onClick={onCancel} className={styles['cancel-button']}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateForm;