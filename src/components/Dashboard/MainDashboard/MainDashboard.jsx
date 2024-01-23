import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';
import CollectionTable from '../CollectionTable/CollectionTable';
import EditForm from '../EditForm/EditForm';
import DetailsTable from '../DetailsTable/DetailsTable';
import ChefController from '../../Controllers/ChefController';
import DishController from '../../Controllers/DishController';
import RestaurantController from '../../Controllers/RestaurantController';

import styles from './MainDashboard.module.css';

const MainDashboard = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [collectionData, setCollectionData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCollection) {
        try {
          const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;

          const response = await axios.get(`http://localhost:3001/api/v1/${collectionName}`);
          setCollectionData(response.data);
        } catch (error) {
          console.error(`Error fetching ${selectedCollection}s:`, error);
        }
      }
    };

    fetchData();
  }, [selectedCollection]);

  const handleSelectCollection = useCallback((collectionType) => {
    setSelectedCollection(collectionType);
    setSelectedItemId(null);
    setSelectedItemDetails(null);
    setShowEditForm(false);
    setIsSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  }, []);

  const handleEdit = useCallback((itemId) => {
    setSelectedItemId(itemId);
    setShowEditForm(true);
    setSelectedItemDetails(null);
  }, []);

  const handleSaveEdit = useCallback(async (editedItem) => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      await axios.put(`http://localhost:3001/api/v1/${collectionName}/${editedItem._id}`, editedItem);
      const updatedCollectionData = collectionData.map((item) =>
        item._id === editedItem._id ? editedItem : item
      );
      setCollectionData(updatedCollectionData);
      setSelectedItemId(null);
      setShowEditForm(false);
    } catch (error) {
      console.error(`Error updating ${selectedCollection}:`, error);
    }
  }, [selectedCollection, collectionData]);

  const handleCancelEdit = useCallback(() => {
    setSelectedItemId(null);
    setShowEditForm(false);
  }, []);

  const renderEditForm = useCallback(() => {
    if (showEditForm) {
      const selectedItem = collectionData.find((item) => item._id === selectedItemId);
      return (
        <EditForm
          selectedItem={selectedItem}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
          objectType={selectedCollection}
        />
      );
    }
    return null;
  }, [showEditForm, handleSaveEdit, handleCancelEdit, selectedCollection, collectionData, selectedItemId]);

  const handleCreate = useCallback(async () => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const controllerMap = {
        chef: ChefController,
        dish: DishController,
        restaurant: RestaurantController,
      };
      const selectedController = controllerMap[selectedCollection];
      if (!selectedController) {
        console.error('Unsupported collection type:', selectedCollection);
        return;
      }
      const newItem = selectedController.create();
      if (!newItem) return;
      const response = await axios.post(`http://localhost:3001/api/v1/${collectionName}`, newItem);
      const createdItem = response.data;
      setCollectionData([...collectionData, createdItem]);
      handleEdit(createdItem._id);
    } catch (error) {
      console.error(`Error creating ${selectedCollection}:`, error);
    }
  }, [selectedCollection, collectionData, handleEdit]);

  const handleDelete = useCallback(async (itemId) => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      await axios.delete(`http://localhost:3001/api/v1/${collectionName}/${itemId}`);
      const updatedCollectionData = collectionData.filter((item) => item._id !== itemId);
      setCollectionData(updatedCollectionData);
      setSelectedItemId(null);
      setShowEditForm(false);
    } catch (error) {
      console.error(`Error deleting ${selectedCollection}:`, error);
    }
  }, [selectedCollection, collectionData]);

  const handleItemSelect = useCallback(async (itemId) => {
    try {
      if (!selectedCollection) {
        console.error('No selected collection.');
        return;
      }

      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const response = await axios.get(`http://localhost:3001/api/v1/${collectionName}/${itemId}`);

      const fetchedItemDetails = response.data;
      setSelectedItemDetails(fetchedItemDetails);
    } catch (error) {
      console.error(`Error fetching details for ${selectedCollection} with ID ${itemId}:`, error);
    }
  }, [selectedCollection]);

  return (
    <div className={styles['main-dashboard']}>
      <button className={styles['menuButton']} onClick={toggleSidebar}>
        ☰
      </button>
      <Sidebar onSelectCollection={handleSelectCollection} isOpen={isSidebarOpen} />
      <div className={`${styles.content} ${isSidebarOpen ? styles['content-sidebar-open'] : ''}`}>
        <CollectionTable
          collectionType={selectedCollection}
          data={collectionData}
          onEdit={handleEdit}
          onCreate={handleCreate}
          onDelete={handleDelete}
          onItemSelect={handleItemSelect}
          selectedItemId={selectedItemId}
        />
        {renderEditForm()}
        {selectedItemDetails && <DetailsTable selectedItemDetails={selectedItemDetails} />}
      </div>
    </div>
  );
};

export default MainDashboard;
