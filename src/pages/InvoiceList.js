import React, { useState, useEffect } from "react";
import axios from "axios";

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch invoices data when the component mounts
  useEffect(() => {
    axios
      .get("https://api.example.com/invoices")  // Replace with actual API endpoint
      .then((response) => {
        setInvoices(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching invoices");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <h3>Invoice #{invoice.id}</h3>
            <p>Date: {invoice.date}</p>
            <p>Total: ${invoice.total}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
