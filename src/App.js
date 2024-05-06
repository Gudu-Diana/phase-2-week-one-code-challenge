import React, { useState, useEffect } from 'react';
import './App.css';
import TransactionList from './components/TransactionList';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

function App() {
  // State to manage transactions
  const [transactions, setTransactions] = useState([]);

  // State to manage search term
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect hook to set initial transactions
  useEffect(() => {
    const initialTransactions = [
      { date: '2024-04-30', description: 'Groceries', category: 'Food', amount: 'KSH 50.00' },
      { date: '2024-04-29', description: 'Gas', category: 'Transportation', amount: 'KSH 30.00' },
      { date: '2024-04-28', description: 'Dinner', category: 'Food', amount: 'KSH 40.00' },
      { date: '2024-04-27', description: 'Movie tickets', category: 'Entertainment', amount: 'KSH 25.00' },
      { date: '2024-04-26', description: 'Clothing', category: 'Shopping', amount: 'KSH 80.00' },
      { date: '2024-04-25', description: 'Utility bill', category: 'Bills', amount: 'KSH 120.00' },
      { date: '2024-04-24', description: 'Lunch', category: 'Food', amount: 'KSH 20.00' },
      { date: '2024-04-23', description: 'Coffee', category: 'Food', amount: 'KSH 5.00' },
      { date: '2024-04-22', description: 'Books', category: 'Education', amount: 'KSH 50.00' },
      { date: '2024-04-21', description: 'Concert tickets', category: 'Entertainment', amount: 'KSH 100.00' },
    ];
    setTransactions(initialTransactions);
  }, []);

  // Function to handle form submission
  const handleFormSubmit = (formData) => {
    setTransactions([...transactions, formData]);
  };

  // Function to handle search term change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Render the main App component
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bank of Flatiron</h1>
        {/* Render SearchBar component */}
        <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        {/* Render TransactionForm component */}
        <TransactionForm onSubmit={handleFormSubmit} />
        {/* Render TransactionList component */}
        <TransactionList transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
