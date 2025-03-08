import React, { useState, useEffect } from 'react';
import invoiceData from '../data/invoices.json';  // Import mock data

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Simulating data fetching
    setInvoices(invoiceData);  // Set data into state
  }, []);

  return (
    <div>
      <h1>Invoice List</h1>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            <h3>{invoice.storeName}</h3>
            <p>Order ID: {invoice.orderId}</p>
            <p>Date: {invoice.date}</p>
            <p>Items:</p>
            <ul>
              {invoice.items.map((item, index) => (
                <li key={index}>
                  {item.name} (x{item.quantity}): ${item.price} each
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
