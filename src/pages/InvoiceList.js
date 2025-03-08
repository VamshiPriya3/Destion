import React from 'react';
import { useNavigate } from 'react-router-dom';
import invoices from '../data/invoices'; // Correct import

const InvoiceList = () => {
  const navigate = useNavigate();

  const handleViewInvoice = (invoiceId) => {
    navigate(`/invoice/${invoiceId}`);
  };

  console.log(invoices);  

  return (
    <div>
      <h2>Invoice List</h2>
      <ul>
        {invoices && invoices.length > 0 ? (
          invoices.map((invoice) => (
            <li key={invoice.id}>
              <h4>{invoice.orderId}</h4>
              <p>{invoice.date}</p>
              <button onClick={() => handleViewInvoice(invoice.id)}>View</button>
            </li>
          ))
        ) : (
          <p>No invoices available</p>
        )}
      </ul>
    </div>
  );
};

export default InvoiceList;
