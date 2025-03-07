import axios from "axios";

const API_URL = "https://yourapiurl.com/products"; 

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const createProduct = async (product) => {
  try {
    const response = await axios.post(API_URL, product);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    return null;
  }
};

export const updateProduct = async (productId, updatedProduct) => {
  try {
    const response = await axios.put(`${API_URL}/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(`${API_URL}/${productId}`);
    return true;
  } catch (error) {
    console.error("Error deleting product:", error);
    return false;
  }
};
