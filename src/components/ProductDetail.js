import React from "react";

const ProductDetail = ({ product, onBack }) => {
  if (!product) {
    return <p>No product selected.</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Store:</strong> {product.storeName}</p>
      <p><strong>Product Name:</strong> {product.productName}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>

      <button onClick={onBack} style={buttonStyle}>
        Back to Product List
      </button>
    </div>
  );
};

// Button Styling
const buttonStyle = {
  marginTop: "10px",
  padding: "5px 10px",
  backgroundColor: "gray",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default ProductDetail;
