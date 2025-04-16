import React from 'react'
import Searchbar from './Searchbar'

const Table = ({searchItem, expenses= [],onSearchChange}) => {
    function handleChange(e){
        onSearchChange(e.target.value)
    }
  return (
    <div className=''>
        <Searchbar/>
        <table>
            <thead>
                <tr className=''>
                    <th>Expenses</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {expenses.filter((expense)=>{
                const term = searchItem.toLowerCase();
                return(
                    expense.name.toLowerCase().includes(term) ||
                    expense.description.toLowerCase().includes(term)
                )
                })
                .map((expense, index) => (
                <tr key={index}>
                    <td>{expense.name}</td>
                    <td>{expense.description}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    
                </tr>
            ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table