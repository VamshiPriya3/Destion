// src/App.js

import React from 'react';
import './styles/App.css'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceList from './components/InvoiceList';
import InvoiceDetail from './components/InvoiceDetail';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Invoice Portal</h1>
        <Routes>
          <Route path="/" element={<InvoiceList />} />
          <Route path="/invoice/:id" element={<InvoiceDetail />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product-form" element={<ProductForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
