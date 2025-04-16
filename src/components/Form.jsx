import React, { useState } from 'react'

const Form = ({addExpense}) => {
  const [content,setContent]=useState({name:"",description:"",category:"",amount:"",date:""})
  function change(e){
    const{name,value} = e.target;
    setContent((prev)=>({...prev,[name]: value,}))
    
  }
  function submit(e){
    e.preventDefault()
    addExpense(content)
    setContent({name:"",description:"",category:"",amount:"",date:""})

  }
  return (
    <div className='form' >
        
            <h3>Add Expense</h3>
            <h4>Enter expense details below</h4>
            <form onSubmit={submit}>
            <input type="text" name='name' placeholder='Enter expense name ' value={content.name} onChange={change}/>
            <br/>
            <input type="text"  name='description' placeholder='Enter expense decription' value={content.description} onChange={change}/>
            <br/>
            <input type="text" name='category' placeholder='Enter expense category' value={content.category} onChange={change}/>
            <br/>
            <input type="number" name='amount' placeholder='Enter amount'value={content.amount} onChange={change}/>
            <br/>
            <input type="date" name='date' placeholder='' value={content.date} onChange={change}/>
            <br/>
            <button>submit</button>
            </form>

        
    </div>
  )
}

export default Form