import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvoiceList from './pages/InvoiceList';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';  
import InvoiceDetail from './pages/InvoiceDetail';
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import ProductForm from "./pages/ProductForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/invoice-list" element={<PrivateRoute element={<InvoiceList />} />} />
        <Route path="/invoice/:invoiceId" element={<InvoiceDetail />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product-form/:id?" element={<ProductForm />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
