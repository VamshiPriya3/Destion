import React, { useState, useEffect } from "react";
import { getInvoices } from "../services/invoiceService";
import InvoiceDetail from "./InvoiceDetail";
import "../styles/InvoiceList.css";

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
    const matchesSearch =
      invoice.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.orderId.toLowerCase().includes(searchTerm.toLowerCase());

    const invoiceDate = new Date(invoice.date);
    const matchesDate =
      (!startDate || invoiceDate >= new Date(startDate)) &&
      (!endDate || invoiceDate <= new Date(endDate));

    const totalAmount = invoice.items.reduce(
      (sum, item) => sum + (item.dealPrice * item.quantity || 0),
      0
    );
    const matchesPrice =
      (!minPrice || totalAmount >= parseFloat(minPrice)) &&
      (!maxPrice || totalAmount <= parseFloat(maxPrice));

    return matchesSearch && matchesDate && matchesPrice;
  });

  const sortedInvoices = [...filteredInvoices].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortBy === "storeName") {
      return a.storeName.localeCompare(b.storeName);
    } else if (sortBy === "totalAmount") {
      const totalA = a.items.reduce(
        (sum, item) => sum + (item.dealPrice * item.quantity || 0),
        0
      );
      const totalB = b.items.reduce(
        (sum, item) => sum + (item.dealPrice * item.quantity || 0),
        0
      );
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

          <div className="mb-3">
            <input
              type="text"
              placeholder="Search by Store Name or Order ID..."
              className="form-control"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="form-select"
            >
              <option value="">Sort By</option>
              <option value="date">Date (Newest First)</option>
              <option value="storeName">Store Name (A-Z)</option>
              <option value="totalAmount">Total Amount (Highest First)</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Min Price:</label>
            <input
              type="number"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label>Max Price:</label>
            <input
              type="number"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="form-control"
            />
          </div>

          <ul className="list-group mb-3">
            {currentInvoices.length > 0 ? (
              currentInvoices.map((invoice, index) => (
                <li
                  key={index}
                  onClick={() => handleInvoiceClick(invoice)}
                  className="list-group-item list-group-item-action"
                  style={{ cursor: "pointer" }}
                >
                  <strong>Store:</strong> {invoice.storeName} | <strong>Order ID:</strong> {invoice.orderId} |{" "}
                  <strong>Date:</strong> {invoice.date}
                </li>
              ))
            ) : (
              <p>No invoices found.</p>
            )}
          </ul>

          {totalPages > 1 && (
            <div className="d-flex justify-content-between">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="btn btn-secondary"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="btn btn-secondary"
              >
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
