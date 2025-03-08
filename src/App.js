// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetail from './pages/InvoiceDetail';  // Import InvoiceDetail

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />  {/* Add route for invoice details */}
      </Routes>
    </Router>
  );
}

export default App;
