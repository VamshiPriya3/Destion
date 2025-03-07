import React, { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ selectedProduct, onClose }) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [storeName, setStoreName] = useState("");

  useEffect(() => {
    if (selectedProduct) {
      setProductName(selectedProduct.productName);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setStoreName(selectedProduct.storeName);
    }
  }, [selectedProduct]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = { productName, description, price, storeName };
    if (selectedProduct) {
      // Update existing product
      await updateProduct(selectedProduct.id, product);
    } else {
      // Create new product
      await createProduct(product);
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedProduct ? "Edit Product" : "Create Product"}</h2>
      <label>Product Name:</label>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        required
      />
      <label>Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>Price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>Store Name:</label>
      <input
        type="text"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        required
      />
      <button type="submit">{selectedProduct ? "Update" : "Create"}</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default ProductForm;
