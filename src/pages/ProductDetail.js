// src/pages/ProductDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products'; // Import mock product data

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from the URL
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the product by ID
    const foundProduct = products.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div>
        <h2>Product Not Found</h2>
        <button onClick={() => navigate('/products')}>Back to Product List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.productName}</h3>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <button onClick={() => navigate('/products')}>Back to Product List</button>
    </div>
  );
};

export default ProductDetail;
