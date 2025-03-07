import React, { useState, useEffect } from "react";
import { getProducts } from "../services/productService"; // Assuming you have a productService
import ProductCard from "./ProductCard";

const ProductList = ({ onSelectProduct, storeName }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts(storeName); // Fetch products based on store
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [storeName]);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 col-sm-6" key={product.id}>
          <ProductCard product={product} onClick={() => onSelectProduct(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
