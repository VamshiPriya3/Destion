import React, { useState, useEffect } from "react";
import { getInvoices } from "../services/invoiceService";
import InvoiceDetail from "./InvoiceDetail";

const InvoiceList = ({ storeName }) => {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const invoicesPerPage = 5;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const data = getInvoices();
    setInvoices(data.filter((invoice) => invoice.storeName === storeName)); // Only show logged-in store's invoices
  }, [storeName]);

  const handleInvoiceClick = (invoice) => {
    setSelectedInvoice(invoice);
  };

  const handleBack = () => {
    setSelectedInvoice(null);
  };

  const filteredInvoices = invoices.filter((invoice) => {
    const matchesSearch = invoice.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          invoice.orderId.toLowerCase().includes(searchTerm.toLowerCase());

    const invoiceDate = new Date(invoice.date);
    const matchesDate = (!startDate || invoiceDate >= new Date(startDate)) &&
                        (!endDate || invoiceDate <= new Date(endDate));

    const totalAmount = invoice.items.reduce((sum, item) => sum + (item.dealPrice * item.quantity || 0), 0);
    const matchesPrice = (!minPrice || totalAmount >= parseFloat(minPrice)) &&
                         (!maxPrice || totalAmount <= parseFloat(maxPrice));

    return matchesSearch && matchesDate && matchesPrice;
  });

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "storeName") {
      return a.storeName.localeCompare(b.storeName);
    } else if (sortBy === "totalAmount") {
      const totalA = a.items.reduce((sum, item) => sum + (item.dealPrice * item.quantity || 0), 0);
      const totalB = b.items.reduce((sum, item) => sum + (item.dealPrice * item.quantity || 0), 0);
      return totalB - totalA;
    }
    return 0;
  });

  const indexOfLastInvoice = currentPage * invoicesPerPage;
  const indexOfFirstInvoice = indexOfLastInvoice - invoicesPerPage;
  const currentInvoices = sortedInvoices.slice(indexOfFirstInvoice, indexOfLastInvoice);
  const totalPages = Math.ceil(sortedInvoices.length / invoicesPerPage);

  return (
    <div>
      {selectedInvoice ? (
        <InvoiceDetail invoice={selectedInvoice} onBack={handleBack} />
      ) : (
        <>
          <h2>Invoices for {storeName}</h2>

          <input
            type="text"
            placeholder="Search by Store Name or Order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width: "300px" }}
          />

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ marginLeft: "10px", padding: "5px" }}>
            <option value="">Sort By</option>
            <option value="date">Date (Newest First)</option>
            <option value="storeName">Store Name (A-Z)</option>
            <option value="totalAmount">Total Amount (Highest First)</option>
          </select>

          <div style={{ marginTop: "10px" }}>
            <label>Start Date:</label>
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} style={{ marginLeft: "5px" }} />
            <label style={{ marginLeft: "10px" }}>End Date:</label>
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} style={{ marginLeft: "5px" }} />
          </div>

          <div style={{ marginTop: "10px" }}>
            <label>Min Price:</label>
            <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} style={{ marginLeft: "5px" }} />
            <label style={{ marginLeft: "10px" }}>Max Price:</label>
            <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} style={{ marginLeft: "5px" }} />
          </div>

          <ul>
            {currentInvoices.length > 0 ? (
              currentInvoices.map((invoice, index) => (
                <li key={index} onClick={() => handleInvoiceClick(invoice)} style={{ cursor: "pointer", color: "blue" }}>
                  <strong>Store:</strong> {invoice.storeName} | <strong>Order ID:</strong> {invoice.orderId} | <strong>Date:</strong> {invoice.date}
                </li>
              ))
            ) : (
              <p>No invoices found.</p>
            )}
          </ul>

          {totalPages > 1 && (
            <div style={{ marginTop: "10px" }}>
              <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} style={{ marginRight: "10px" }}>
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} style={{ marginLeft: "10px" }}>
                Next
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default InvoiceList;
