import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/InvoiceList.css'; 
function InvoiceList() {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    axios.get('/path/to/your/invoices.json')
      .then(response => {
        setInvoices(response.data);
      })
      .catch(error => {
        console.error('Error fetching invoices:', error);
      });
  }, []);

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.id}>
            <Link to={`/invoice/${invoice.id}`}>{invoice.storeName} - {invoice.orderId}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
