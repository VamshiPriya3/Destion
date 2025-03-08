// src/pages/InvoiceDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import invoices from '../data/invoices'; // Import mock data

const InvoiceDetail = () => {
  const { id } = useParams();  // Get invoice ID from the URL
  const [invoice, setInvoice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Find the invoice by ID
    const foundInvoice = invoices.find((invoice) => invoice.id === parseInt(id));
    setInvoice(foundInvoice);
  }, [id]);

  if (!invoice) {
    return (
      <div>
        <h2>Invoice Not Found</h2>
        <button onClick={() => navigate('/invoices')}>Back to Invoice List</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Invoice Details</h2>
      <h3>Store: {invoice.storeName}</h3>
      <p>Order ID: {invoice.orderId}</p>
      <p>Date: {invoice.date}</p>
      <p>Quantity: {invoice.quantity}</p>
      <p>Regular Price: ${invoice.regularPrice}</p>
      <p>Deal Price: ${invoice.dealPrice}</p>
      <p>Item Total: ${invoice.itemTotal}</p>
      <p>Item-wise Tax: ${invoice.itemTax}</p>
      <button onClick={() => navigate('/invoices')}>Back to Invoice List</button>
    </div>
  );
};

export default InvoiceDetail;
