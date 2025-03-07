import React from "react";

const InvoiceDetail = ({ invoice, onBack }) => {
  if (!invoice) {
    return <p>No invoice selected.</p>;
  }

  return (
    <div>
      <h2>Invoice Details</h2>
      <p><strong>Invoice Number:</strong> {invoice.invoiceNumber}</p>
      <p><strong>Store:</strong> {invoice.storeName}</p>
      <p><strong>Date:</strong> {invoice.date}</p>
      <p><strong>Total Amount:</strong> ₹{invoice.totalAmount}</p>
      <p><strong>Items:</strong></p>
      <ul>
        {invoice.items.map((item, index) => (
          <li key={index}>
            {item.productName} - ₹{item.price} (Qty: {item.quantity})
          </li>
        ))}
      </ul>

      <button onClick={onBack} style={buttonStyle}>
        Back to Invoice List
      </button>
    </div>
  );
};

// Button Styling
const buttonStyle = {
  marginTop: "10px",
  padding: "5px 10px",
  backgroundColor: "gray",
  color: "white",
  border: "none",
  cursor: "pointer",
};

export default InvoiceDetail;
