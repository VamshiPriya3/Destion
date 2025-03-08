// src/utils/generatePDF.js
import jsPDF from 'jspdf';

const generatePDF = (invoice) => {
  const doc = new jsPDF();
  doc.setFontSize(18);
  doc.text('Invoice', 20, 20);
  doc.setFontSize(12);
  doc.text(`Store Name: ${invoice.storeName}`, 20, 30);
  doc.text(`Invoice Date: ${invoice.date}`, 20, 40);
  doc.text(`Total: $${invoice.total}`, 20, 50);
  
  doc.save('invoice.pdf');
};

export default generatePDF;
