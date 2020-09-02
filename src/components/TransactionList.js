import React, { useContext, useState, useEffect } from 'react'
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';


const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const [filteredTransactions, setFilteredTransactions] = useState(transactions)
  
  useEffect(() => {setFilteredTransactions(transactions)}, [transactions])

  const filterTransactions = (e) => {
    if (e.target.innerText === 'Expenses') {
      const expenses = transactions.filter(transaction => transaction.amount < 0)
      setFilteredTransactions(expenses);
    } 

    if (e.target.innerText === 'Incomes') {
      const incomes = transactions.filter(transaction => transaction.amount > 0)
      setFilteredTransactions(incomes);
    }

    if (e.target.innerText === 'All') {
      setFilteredTransactions(transactions);
    }
  }
    
  return (
    <div className="transactionList">
      <div className="filter">
        <h3>Filter</h3>
        <div className="btns">
          <button className="bttn all" onClick={filterTransactions}>All</button>
          <button className="bttn expenses" onClick={filterTransactions}>Expenses</button>
          <button className="bttn incomes" onClick={filterTransactions}>Incomes</button>
        </div>
      </div>
      <ul className="list">
        {filteredTransactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction}/>
        ))}
      </ul>
    </div>
  )
}

export default TransactionList
