import React, { useState } from 'react';

const TransactionForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  });

  const { date, description, category, amount } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Clear form fields after submission
    setFormData({
      date: '',
      description: '',
      category: '',
      amount: ''
    });
  };

  return (
    <div className="transaction-form">
      <form onSubmit={handleSubmit}>
        <input type="date" name="date" value={date} onChange={handleChange} />
        <input type="text" name="description" placeholder="Description" value={description} onChange={handleChange} />
        <input type="text" name="category" placeholder="Category" value={category} onChange={handleChange} />
        <input type="number" name="amount" placeholder="Amount" value={amount} onChange={handleChange} />
        <button type="submit">Add New Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
