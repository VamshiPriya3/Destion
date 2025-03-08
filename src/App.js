import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import InvoiceList from "./pages/InvoiceList";
import InvoiceDetails from "./pages/InvoiceDetails";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invoices" element={<InvoiceList />} />
          <Route path="/invoice/:id" element={<InvoiceDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
