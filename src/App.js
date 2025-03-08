import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetail from './pages/InvoiceDetail';
import ProductList from './pages/ProductList';  // Import the ProductList component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoices" element={<InvoiceList />} />
        <Route path="/invoice/:id" element={<InvoiceDetail />} />
        <Route path="/products" element={<ProductList />} />  {/* Route for ProductList */}
      </Routes>
    </div>
  );
};

export default App;
