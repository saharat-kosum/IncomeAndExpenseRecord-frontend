import axios from 'axios';
import React, { useEffect, useState } from 'react'
import List from './List'

function Record(props) {
    const [record,Setrecord] = useState([]);
    const [income,setIncome]=useState('');
    const [expense,setExpense]=useState('');
    const amounts = record.map(element=>element.amount);
    const incomes = amounts.filter(e=>e>0).reduce((total,element)=>total+=element,0);
    const expenses = amounts.filter(e=>e<0).reduce((total,element)=>total+=element,0);

    const del = (e)=>{
      axios.post('https://incomeandexpenserecord-backend.onrender.com/delete',{id:e.id})
      .then((res)=>{
        Setrecord(res.data);
      }).catch(err=>console.log(err));
    };

    useEffect(()=>{
      Setrecord(props.element)
    },[props.element]);

    useEffect(()=>{
      setIncome(incomes);
      setExpense(expenses);
      props.sentincome(income);
      props.sentexpense(expense);
    },[amounts])

  return (
    <div>
        {record.map(element=><List key={element._id} element={element} sentid={(e)=>props.sentid(e)} sentdel={del}/>)}
    </div>
  )
}

export default Record