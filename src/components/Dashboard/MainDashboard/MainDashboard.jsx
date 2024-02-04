import React, { useState, useEffect, useCallback } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import CollectionTable from '../CollectionTable/CollectionTable';
import EditForm from '../EditForm/EditForm';
import DetailsTable from '../DetailsTable/DetailsTable';
import CreateForm from '../CreateForm/CreateForm';
import { ApiService } from '../../../Services/ApiServices';

import styles from './MainDashboard.module.css';

const MainDashboard = () => {
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
      const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
      const collectionData = await ApiService.getCollection(collectionName);
      setCollectionData(collectionData);
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
    const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
    const updatedItem = await ApiService.updateItem(collectionName, selectedItemId, editedItem);
    const updatedCollectionData = collectionData.map((item) =>
      item._id === selectedItemId ? updatedItem : item);
    setCollectionData(updatedCollectionData);
    setSelectedItemId(null);
    setSelectedItemDetails(null);
    setShowEditForm(false);
  }, [selectedCollection, selectedItemId, collectionData]);
  

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
    const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
    console.log(createdItem);
    const response = await ApiService.createItem(collectionName, createdItem)
    const updatedCollectionData = [...collectionData, response];
    setCollectionData(updatedCollectionData);
    setShowCreateForm(false);
  }, [selectedCollection, collectionData]);

  const handleDelete = useCallback(async (itemId) => {
    const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
    await ApiService.deleteItem(collectionName, itemId);
    const updatedCollectionData = collectionData.filter((item) => item._id !== itemId);
    setCollectionData(updatedCollectionData);
    setSelectedItemId(null);
    setShowEditForm(false);
    setSelectedItemDetails(false);
  }, [selectedCollection, collectionData]);

  const handleItemSelect = useCallback(async (itemId) => {
    const collectionName = selectedCollection === 'dish' ? 'dishes' : `${selectedCollection}s`;
    const response = await ApiService.getItemDetails(collectionName, itemId);
    const fetchedItemDetails = response;
    setSelectedItemDetails(fetchedItemDetails);
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
