import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function InvoiceDetail() {
  const { id } = useParams();
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    axios.get(`/path/to/your/invoice/detail/${id}.json`)
      .then(response => {
        setInvoice(response.data);
      })
      .catch(error => {
        console.error('Error fetching invoice details:', error);
      });
  }, [id]);

  if (!invoice) return <div>Loading...</div>;

  return (
    <div>
      <h2>{invoice.storeName} - {invoice.orderId}</h2>
      <p>Order Date: {invoice.date}</p>
      <p>Item Total: {invoice.itemTotal}</p>
      <p>Tax: {invoice.tax}</p>
      <p>Grand Total: {invoice.grandTotal}</p>
    </div>
  );
}

export default InvoiceDetail;
