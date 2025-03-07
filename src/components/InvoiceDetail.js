import React from "react";
import jsPDF from "jspdf";

const InvoiceDetail = ({ invoice }) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text("Invoice", 20, 20);

    // Add invoice details
    doc.setFontSize(12);
    doc.text(`Invoice ID: ${invoice.id}`, 20, 30);
    doc.text(`Store: ${invoice.storeName}`, 20, 40);
    doc.text(`Date: ${invoice.date}`, 20, 50);

    // Add invoice items
    let y = 60;
    invoice.items.forEach((item) => {
      doc.text(`${item.productName} - ₹${item.price}`, 20, y);
      y += 10;
    });

    // Add total amount
    doc.text(`Total: ₹${invoice.totalAmount}`, 20, y + 10);

    // Save the PDF
    doc.save(`invoice_${invoice.id}.pdf`);
  };

  return (
    <div>
      <h2>Invoice Detail</h2>
      <button onClick={generatePDF}>Download PDF</button>
      <ul>
        {invoice.items.map((item, index) => (
          <li key={index}>
            {item.productName} - ₹{item.price}
          </li>
        ))}
      </ul>
      <p>Total: ₹{invoice.totalAmount}</p>
    </div>
  );
};

export default InvoiceDetail;
