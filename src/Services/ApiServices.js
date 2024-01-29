import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

export const ApiService = {
  async getCollection(collectionName) {
    try {
      const response = await axios.get(`${API_URL}${collectionName}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching ${collectionName}: ${error.message}`);
    }
  },

  async updateItem(collectionName, itemId, updatedItem) {
    try {
      const response = await axios.put(`${API_URL}${collectionName}/${itemId}`, updatedItem);
      return response.data;
    } catch (error) {
      throw new Error(`Error updating ${collectionName}: ${error.message}`);
    }
  },

  async createItem(collectionName, newItem) {
    try {
      const response = await axios.post(`${API_URL}${collectionName}`, newItem);
      return response.data;
    } catch (error) {
      throw new Error(`Error creating ${collectionName}: ${error.message}`);
    }
  },

  async deleteItem(collectionName, itemId) {
    try {
      await axios.delete(`${API_URL}${collectionName}/${itemId}`);
    } catch (error) {
      throw new Error(`Error deleting ${collectionName}: ${error.message}`);
    }
  },

  async getItemDetails(collectionName, itemId) {
    try {
      const response = await axios.get(`${API_URL}${collectionName}/${itemId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching details for ${collectionName} with ID ${itemId}: ${error.message}`);
    }
  },
};
