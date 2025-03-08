import React, { useState, useEffect } from 'react';
import productData from '../data/products.json';  

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    setProducts(productData);  
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
