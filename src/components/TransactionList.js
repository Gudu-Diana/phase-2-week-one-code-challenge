import React, { useState } from 'react';

const TransactionList = ({ transactions }) => {
  // State for managing sorting
  const [sortBy, setSortBy] = useState('date');

  // Function to handle sorting by different fields
  const handleSort = (sortByField) => {
    setSortBy(sortByField);
  };

  // Sorting transactions based on the selected field
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'description') {
      return a.description.localeCompare(b.description);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div>
      {/* Sorting buttons */}
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button style={{ marginRight: '5px' }} onClick={() => handleSort('date')}>Sort by Date</button>
        <button style={{ marginRight: '5px' }} onClick={() => handleSort('category')}>Sort by Category</button>
        <button onClick={() => handleSort('description')}>Sort by Description</button>
      </div>
      {/* Transaction table */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Date</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Description</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Category</th>
            <th style={{ border: '1px solid #000', padding: '8px' }}>Amount</th>
          </tr>
        </thead>
        <tbody>
          {/* Rendering sorted transactions */}
          {sortedTransactions.map((transaction, index) => (
            <tr key={index}>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{transaction.date}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{transaction.description}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{transaction.category}</td>
              <td style={{ border: '1px solid #000', padding: '8px' }}>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
