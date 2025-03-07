import React, { useState, useEffect } from "react";
import productData from "../data/products.json";
import { deleteProduct } from "../services/productService"; 

const ProductList = ({ onSelectProduct, storeName }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [storeFilter, setStoreFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");
  const [stores, setStores] = useState([]);
  const [products, setProducts] = useState(productData); 

  useEffect(() => {
    const uniqueStores = [...new Set(productData.map((product) => product.storeName))];
    setStores(uniqueStores);
  }, []);

  
  const filteredProducts = products
    .filter((product) =>
      storeName ? product.storeName === storeName : storeFilter === "All" || product.storeName === storeFilter
    )
    .filter((product) =>
      searchTerm.trim() === "" || product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

  
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return 0;
  });

  
  const handleDelete = async (productId) => {
    const success = await deleteProduct(productId);
    if (success) {
      setProducts(products.filter((product) => product.id !== productId)); 
    }
  };

  return (
    <div>
      <h2>Products</h2>

      
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      
      {!storeName && (
        <select value={storeFilter} onChange={(e) => setStoreFilter(e.target.value)}>
          <option value="All">All Stores</option>
          {stores.map((store, index) => (
            <option key={index} value={store}>
              {store}
            </option>
          ))}
        </select>
      )}

      
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort by</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>

      
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
