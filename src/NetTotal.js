import React from 'react'
import './NetTotal.css'

function NetTotal(props) {
  return (
    <div className='NetTotalContainer'>
      <h1>Income and Expenses Record</h1>
      <div className="Balance">
        <h2>Balance</h2>
        <h1>{(props.income+props.expense).toLocaleString()}</h1>
      </div>
      <div className="Net">
        <div className="netincome">
          <h3>Net income</h3>
          <h2 style={{color:'green'}}>{props.income.toLocaleString()}</h2>
        </div>
        <div className="netexpense">
          <h3>Net Expense</h3>
          <h2 style={{color:'red'}}>{props.expense.toLocaleString()}</h2>
        </div>
      </div>
    </div>
  )
}

export default NetTotal