import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to fetch invoice ID from URL

function InvoiceDetail() {
  const { id } = useParams(); // Get the invoice ID from the URL
  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    // Fetching the invoice detail using the invoice ID
    const fetchInvoiceDetail = async () => {
      const response = await fetch(`/path-to-your-mock-invoice-data/${id}`); // Replace with actual API or mock data
      const data = await response.json();
      setInvoice(data);
    };

    fetchInvoiceDetail();
  }, [id]); // Fetch the data when the ID changes

  if (!invoice) return <div>Loading...</div>;

  return (
    <div>
      <h1>Invoice Detail for {invoice.storeName}</h1>
      <p>Order ID: {invoice.orderId}</p>
      <p>Date: {invoice.date}</p>
      {/* Display other details of the invoice */}
    </div>
  );
}

export default InvoiceDetail;
