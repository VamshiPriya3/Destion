import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InvoiceList from './pages/InvoiceList';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';  
import InvoiceDetail from './pages/InvoiceDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/invoice-list" element={<PrivateRoute element={<InvoiceList />} />} />
        <Route path="/invoice/:invoiceId" element={<InvoiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
