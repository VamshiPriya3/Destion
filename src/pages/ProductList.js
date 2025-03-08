// src/pages/ProductList.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";  

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [storeFilter, setStoreFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let filtered = products;
    if (storeFilter) {
      filtered = filtered.filter((product) => product.storeName === storeFilter);
    }
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredProducts(filtered);
  }, [storeFilter, searchQuery]);

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      
      <div>
        <label>Filter by Store: </label>
        <select onChange={(e) => setStoreFilter(e.target.value)} value={storeFilter}>
          <option value="">All Stores</option>
          <option value="Store A">Store A</option>
          <option value="Store B">Store B</option>
        </select>
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Search by Product Name"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />
      </div>
      
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h4>{product.productName}</h4>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleViewProduct(product.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
