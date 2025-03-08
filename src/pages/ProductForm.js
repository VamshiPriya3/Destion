// src/components/ProductForm.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";

const ProductForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    storeName: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((prod) => prod.id === parseInt(id));
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Update existing product
      const updatedProducts = products.map((prod) =>
        prod.id === parseInt(id) ? product : prod
      );
      // No need to assign updatedProducts to a variable
    } else {
      // Add new product
      const newProduct = { ...product, id: Date.now() };  // Temporary ID using Date.now
      products.push(newProduct);  // Add to mock data
    }
    navigate("/product-list");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? "Edit Product" : "Add Product"}</h2>
      <div>
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          value={product.productName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Store Name</label>
        <input
          type="text"
          name="storeName"
          value={product.storeName}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">{id ? "Update" : "Add"}</button>
    </form>
  );
};

export default ProductForm;
