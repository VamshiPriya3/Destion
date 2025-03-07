import React from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const InvoiceDetail = ({ invoice, onBack }) => {
  if (!invoice) {
    return <p>No invoice selected.</p>;
  }

  
  const totalAmount = invoice.items.reduce((sum, item) => {
    return sum + item.quantity * item.dealPrice;
  }, 0);

  
  const handleExportPDF = () => {
    const input = document.getElementById("invoice-pdf");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 10, pdfWidth, pdfHeight);
      pdf.save(`Invoice_${invoice.orderId}.pdf`);
    });
  };

  return (
    <div id="invoice-pdf" style={containerStyle}>
      <h2>Invoice Details</h2>
      <p><strong>Store:</strong> {invoice.storeName}</p>
      <p><strong>Order ID:</strong> {invoice.orderId}</p>
      <p><strong>Date:</strong> {invoice.date}</p>

      <ul>
        {invoice.items.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.quantity} x ₹{item.dealPrice} (Tax: {item.tax}%)
          </li>
        ))}
      </ul>
      <p><strong>Total:</strong> ₹{totalAmount}</p>

      
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleExportPDF} style={buttonStyle}>Export to PDF</button>
        <button onClick={onBack} style={{ ...buttonStyle, marginLeft: "10px", backgroundColor: "gray" }}>
          Back to List
        </button>
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  maxWidth: "400px",
  margin: "auto",
  backgroundColor: "#f9f9f9",
};

const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "blue",
  color: "white",
  border: "none",
  cursor: "pointer",
  borderRadius: "5px",
};

export default InvoiceDetail;
