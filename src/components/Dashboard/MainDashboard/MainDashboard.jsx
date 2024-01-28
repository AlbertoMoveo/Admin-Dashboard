import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Sidebar from '../Sidebar/Sidebar';
import CollectionTable from '../CollectionTable/CollectionTable';
import EditForm from '../EditForm/EditForm';
import DetailsTable from '../DetailsTable/DetailsTable';
import CreateForm from '../CreateForm/CreateForm';

import styles from './MainDashboard.module.css';

const MainDashboard = () => {
  const API_URL = 'http://localhost:3001/api/v1/';
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [collectionData, setCollectionData] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedItemDetails, setSelectedItemDetails] = useState(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedCollection) {
        try {
          const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
          const response = await axios.get(`${API_URL}${collectionName}`);
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
    setShowCreateForm(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  }, []);

  const handleEditSelect = useCallback((itemId) => {
    setSelectedItemId(itemId);
    setShowEditForm(true);
    setSelectedItemDetails(null);
    setShowCreateForm(false);
  }, []);

  const handleSaveEdit = useCallback(async (editedItem) => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const response = await axios.put(`${API_URL}${collectionName}/${selectedItemId}`, editedItem);
      const updatedCollectionData = collectionData.map((item) =>
        item._id === selectedItemId ? response.data : item
      );
      setCollectionData(updatedCollectionData);
      setSelectedItemId(null);
      setShowEditForm(false);
    } catch (error) {
      console.error(`Error updating ${selectedCollection}:`, error);
    }
  }, [selectedCollection, collectionData, selectedItemId]);

  const handleCancel = useCallback(() => {
    setSelectedItemId(null);
    setShowCreateForm(false);
    setShowEditForm(false);
  }, []);

  const handleCreate = useCallback(() => {
    if(selectedCollection) {
      setShowEditForm(false);
      setShowCreateForm(true);
    }
  }, [selectedCollection]);

  const handleSaveCreate = useCallback(async (createdItem) => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const response = await axios.post(`${API_URL}${collectionName}`, createdItem);
      const updatedCollectionData = [...collectionData, response.data];
      setCollectionData(updatedCollectionData);
      handleEditSelect(response.data._id);
      setShowCreateForm(false);
    } catch (error) {
      console.error(`Error creating ${selectedCollection}:`, error);
    }
  }, [selectedCollection, collectionData, handleEditSelect]);

  const handleDelete = useCallback(async (itemId) => {
    try {
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      await axios.delete(`${API_URL}${collectionName}/${itemId}`);
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
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const response = await axios.get(`${API_URL}${collectionName}/${itemId}`);
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
          onEdit={handleEditSelect}
          onCreate={handleCreate}
          onDelete={handleDelete}
          onItemSelect={handleItemSelect}
          selectedItemId={selectedItemId}
        />
        {showEditForm&&<EditForm
          onSave={handleSaveEdit}
          onCancel={handleCancel}
          objectType={selectedCollection}
          itemId={selectedItemId}
        />}
        {showCreateForm&&<CreateForm
          onSave={handleSaveCreate}
          onCancel={handleCancel}
          objectType={selectedCollection}
        />}
        {selectedItemDetails && <DetailsTable selectedItemDetails={selectedItemDetails} />}
      </div>
    </div>
  );
};

export default MainDashboard;
