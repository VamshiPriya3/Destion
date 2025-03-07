

import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({ name: '', description: '', price: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/path/to/your/api/products', product)
      .then(response => {
        console.log('Product added successfully', response);
      })
      .catch(error => {
        console.error('Error adding product:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product Name:
        <input type="text" name="name" value={product.name} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={product.description} onChange={handleChange}></textarea>
      </label>
      <label>
        Price:
        <input type="number" name="price" value={product.price} onChange={handleChange} />
      </label>
      <button type="submit">Save Product</button>
    </form>
  );
}

export default ProductForm;
