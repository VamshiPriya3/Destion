// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetail from './pages/InvoiceDetail';
import ProductList from './pages/ProductList';  // Import ProductList
import ProductDetail from './pages/ProductDetail';  // Import ProductDetail

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="/products" element={<ProductList />} />  {/* Add route for Product List */}
        <Route path="/product/:id" element={<ProductDetail />} />  {/* Add route for Product Details */}
      </Routes>
    </Router>
  );
}

export default App;
