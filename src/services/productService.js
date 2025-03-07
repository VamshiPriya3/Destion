import axios from "axios";

const API_BASE_URL = "http://localhost:5000/products"; 

// Get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

// Create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_BASE_URL, productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
  }
};

// Update a product
export const updateProduct = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
  }
};

// Delete a product
export const deleteProduct = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting product:", error);
  }
};
