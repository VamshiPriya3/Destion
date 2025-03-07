import React, { useEffect, useState } from "react";
import ProductList from "./ProductList"; 
import InvoiceList from "./InvoiceList"; 

const Dashboard = ({ storeName }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    setLoading(false); 
  }, [storeName]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome to your Dashboard, {storeName}</h1>
      <div>
        <h2>Product List</h2>
        <ProductList storeName={storeName} />
      </div>
      <div>
        <h2>Invoice List</h2>
        <InvoiceList storeName={storeName} />
      </div>
    </div>
  );
};

export default Dashboard;
