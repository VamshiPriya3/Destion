

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css'; 

function ProductDetail() {
  const { productId } = useParams();  
  const [product, setProduct] = useState(null);

  useEffect(() => {
   
    fetch(`/data/products.json`)
      .then(response => response.json())
      .then(data => {
        const selectedProduct = data.find(p => p.id === parseInt(productId));  // Find product by ID
        setProduct(selectedProduct);
      })
      .catch(error => console.error("Error fetching product details:", error));
  }, [productId]);  

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Store:</strong> {product.store}</p>
      <p><strong>Category:</strong> {product.category}</p>
    </div>
  );
}

export default ProductDetail;
