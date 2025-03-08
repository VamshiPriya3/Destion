import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InvoiceList from './pages/InvoiceList';
import InvoiceDetail from './pages/InvoiceDetail';
import Login from './pages/Login';
import PrivateRoute from './pages/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* Root path / */}
        <Route path="/" element={<PrivateRoute element={<Home />} />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/invoices" element={<PrivateRoute element={<InvoiceList />} />} />
        <Route path="/invoice/:id" element={<PrivateRoute element={<InvoiceDetail />} />} />
      </Routes>
    </Router>
  );
};

export default App;
