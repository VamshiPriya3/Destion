import React, { useState, useEffect } from 'react';
import invoices from '../data/invoices'; // Correctly import the invoices data

const InvoiceList = () => {
  const [invoiceData, setInvoiceData] = useState([]);

  useEffect(() => {
    setInvoiceData(invoices);  // Set mock data to state
  }, []);

  return (
    <div>
      <h2>Invoice List</h2>
      {invoiceData.length > 0 ? (
        <ul>
          {invoiceData.map((invoice) => (
            <li key={invoice.id}>
              <h3>Store: {invoice.storeName}</h3>
              <p>Order ID: {invoice.orderId}</p>
              <p>Date: {invoice.date}</p>
              <p>Quantity: {invoice.quantity}</p>
              <p>Item Total: ${invoice.itemTotal}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No invoices available.</p>
      )}
    </div>
  );
};

export default InvoiceList;
