// components/ProductForm.js
import React, { useState } from "react";

const ProductForm = ({ onSaveProduct }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [storeName, setStoreName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { id: Date.now(), productName, price, storeName };
    onSaveProduct(newProduct);
    setProductName("");
    setPrice("");
    setStoreName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product Name"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <input
        type="text"
        value={storeName}
        onChange={(e) => setStoreName(e.target.value)}
        placeholder="Store Name"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
