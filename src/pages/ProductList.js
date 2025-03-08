// src/pages/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation
import products from '../data/products'; // Import mock product data

const ProductList = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    setProductData(products); // Load product data
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {productData.length > 0 ? (
        <ul>
          {productData.map((product) => (
            <li key={product.id}>
              <h3>{product.productName}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
