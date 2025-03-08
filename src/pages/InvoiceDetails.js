import React from 'react';
import { useParams } from 'react-router-dom';

function InvoiceDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Invoice Details - {id}</h2>
      
    </div>
  );
}

export default InvoiceDetails;
