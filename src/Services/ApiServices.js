import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1/';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

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
      throw new Error(`Error updating ${collectionName}: ${error.message} for item with ID ${itemId}`);
    }
  },

  async createItem(collectionName, createdItem) {
    try {
      const response = await axios.post(`${API_URL}${collectionName}`, createdItem);
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

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    setAuthToken(token);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      sessionStorage.removeItem('token');
      window.location.href = '/unauthorized';
    }
    return Promise.reject(error);
  }
);