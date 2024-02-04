import React, { useState, useCallback, useMemo } from 'react';

import ChefController from '../../Controllers/ChefController';
import DishController from '../../Controllers/DishController';
import RestaurantController from '../../Controllers/RestaurantController';
import { GENERAL_RESOURCES } from '../../../resources/Resources';

import styles from './CreateForm.module.css';
import UserController from '../../Controllers/UserController';

const controllerMap = {
  chef: ChefController,
  dish: DishController,
  restaurant: RestaurantController,
  user: UserController
};

const CreateForm = ({ onSave, onCancel, objectType }) => {
  const initialNewItem = useMemo(() => ({}), []);
  const selectedController = useMemo(() => controllerMap[objectType], [objectType]);
  const [newItem, setNewItem] = useState({ ...initialNewItem });

  const createNewText = useMemo(() => `${GENERAL_RESOURCES.CREATE_NEW} ${objectType.charAt(0).toUpperCase() + objectType.slice(1)}`, [objectType]);

  const renderInputFields = useCallback(() => {
    const handleChange = (e) => {
      const { name, value } = e.target;
      setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
    };
    if (!selectedController) {
      return null;
    }
    return selectedController.renderCreateForm({ newItem, handleChange });
  }, [selectedController, newItem]);

  const handleCreate = useCallback(() => {
    onSave(newItem);
    setNewItem({ ...initialNewItem });
  }, [onSave, newItem, initialNewItem]);

  return (
    <div className={styles['create-form']}>
      <h2>{createNewText}</h2>
      <form>
        {renderInputFields()}
        <button type="button" onClick={handleCreate} className={styles['create-button']}>
          {GENERAL_RESOURCES.CREATE}
        </button>
        <button type="button" onClick={onCancel} className={styles['cancel-button']}>
          {GENERAL_RESOURCES.CANCEL}
        </button>
      </form>
    </div>
  );
};

export default CreateForm;