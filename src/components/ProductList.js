import React, { useState, useEffect } from "react";
import { deleteProduct } from "../services/productService";
import ProductForm from "./ProductForm"; // Import ProductForm

const ProductList = ({ onSelectProduct, storeName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [storeFilter, setStoreFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState(productData);

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  return (
    <div>
      <h2>Products</h2>

      
      <ProductForm onSaveProduct={handleAddProduct} />

      
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      

      <ul>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <li key={product.id}>
              {product.productName} - ₹{product.price} ({product.storeName})
              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
