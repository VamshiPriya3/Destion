

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Dashboard.css';  

function Dashboard() {
  const [invoices, setInvoices] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
     
    axios.get('/path/to/invoices.json') 
      .then(response => setInvoices(response.data))
      .catch(error => console.error('Error fetching invoices:', error));

    axios.get('/path/to/products.json') 
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      
      <div className="section">
        <h3>Invoices</h3>
        <p>Total Invoices: {invoices.length}</p>
        <Link to="/invoices">View All Invoices</Link>
      </div>

     
      <div className="section">
        <h3>Products</h3>
        <p>Total Products: {products.length}</p>
        <Link to="/products">View All Products</Link>
      </div>

      
    </div>
  );
}

export default Dashboard;
