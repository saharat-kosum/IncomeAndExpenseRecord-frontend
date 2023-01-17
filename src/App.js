import './App.css';
import Record from './Record';
import NetTotal from './NetTotal';
import Form from './Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data,Setdata]=useState([]);
  const [id,Setid]=useState('');
  const [income,setIncome]=useState('');
  const [expense,setExpense]=useState('');

  useEffect(()=>{
    axios.get('https://incomeandexpenserecord-backend.onrender.com')
    .then((res)=>Setdata(res.data))
    .catch((err)=>console.log(err))
  },[]);

  return (
    <div className="App">
      <NetTotal income={income} expense={expense}/>
      <Form sentdata={(e)=>{Setdata(e);Setid('')}} element={id}/>
      <Record element={data} sentid={(e)=>Setid(e)} sentincome={(e)=>setIncome(e)} sentexpense={(e)=>setExpense(e)}/>
    </div>
  );
}

export default App;
