import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onClick }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
