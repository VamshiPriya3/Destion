import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import InvoiceList from "./components/InvoiceList";
import ProductDetail from "./components/ProductDetail";
import InvoiceDetail from "./components/InvoiceDetail";
import { getLoggedInStore, logout } from "./services/authService";
import './styles/global.css';

const App = () => {
  const [loggedInStore, setLoggedInStore] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const store = getLoggedInStore();
    if (store) {
      setLoggedInStore(store);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedInStore(null);
  };

  return (
    <Router>
      <div className="container mt-5">
        {loggedInStore && (
          <div className="d-flex justify-content-between mb-4">
            <h2>Welcome, {loggedInStore}</h2>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={loggedInStore ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login setLoggedInStore={setLoggedInStore} />} />
          <Route
            path="/dashboard"
            element={
              loggedInStore ? (
                <div>
                  <h1>Dashboard</h1>
                  <ProductList onSelectProduct={setSelectedProduct} storeName={loggedInStore} />
                  <InvoiceList onSelectInvoice={setSelectedInvoice} storeName={loggedInStore} />
                </div>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/product/:id"
            element={selectedProduct ? (
              <ProductDetail product={selectedProduct} />
            ) : (
              <Navigate to="/dashboard" />
            )}
          />
          <Route
            path="/invoice/:id"
            element={selectedInvoice ? (
              <InvoiceDetail invoice={selectedInvoice} />
            ) : (
              <Navigate to="/dashboard" />
            )}
          />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
