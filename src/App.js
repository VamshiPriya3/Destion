import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import ProductList from "./components/ProductList";
import InvoiceList from "./components/InvoiceList";
import ProductDetail from "./components/ProductDetail";
import InvoiceDetail from "./components/InvoiceDetail";
import { getLoggedInStore, logout } from "./services/authService";

const App = () => {
  const [loggedInStore, setLoggedInStore] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const store = getLoggedInStore();
    if (store) {
      console.log("Logged-in Store Found:", store);
      setLoggedInStore(store);
    }
  }, []);

  const handleLogout = () => {
    logout();
    setLoggedInStore(null);
  };

  return (
    <Router>
      <div>
        {/* Display Logged In Store and Logout Button */}
        {loggedInStore && (
          <div>
            <h2>Welcome, {loggedInStore}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

       
        <Routes>
         
          <Route
            path="/"
            element={loggedInStore ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
          />

          {/* Login Route */}
          <Route path="/login" element={<Login setLoggedInStore={setLoggedInStore} />} />

          {/* Dashboard Route */}
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
            element={
              selectedProduct ? (
                <ProductDetail product={selectedProduct} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

         
          <Route
            path="/invoice/:id"
            element={
              selectedInvoice ? (
                <InvoiceDetail invoice={selectedInvoice} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />

          
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
