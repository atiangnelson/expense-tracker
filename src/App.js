import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Searchbar from './components/Searchbar';
import Table from './components/Table';
import { useState } from 'react';

function App() {
  const [expenses,setExpenses]=useState([])
  const[searchItem,setSearchItem]=useState("")

  const addNewExpense=(newExpense)=>{
    setExpenses((prev)=>[...prev,newExpense])

  }

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <div className='sept'>
        <Table searchItem={searchItem} expenses={expenses} onSearchChange={setSearchItem}/>
        <Form addExpense={addNewExpense} />
      </div>

      
    </div>
  );
}

export default App;
