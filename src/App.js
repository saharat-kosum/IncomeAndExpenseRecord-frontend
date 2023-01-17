import './App.css';
import Record from './Record';
import NetTotal from './NetTotal';
import Form from './Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader'

function App() {
  const [data,Setdata]=useState([]);
  const [id,Setid]=useState('');
  const [income,setIncome]=useState('');
  const [expense,setExpense]=useState('');
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://incomeandexpenserecord-backend.onrender.com')
    .then((res)=>{
      Setdata(res.data);
      setIsLoading(false);})
    .catch((err)=>console.log(err))
  },[]);

  return (
    <div className="App">
      <NetTotal income={income} expense={expense}/>
      <Form sentdata={(e)=>{Setdata(e);Setid('')}} element={id}/>
      <HashLoader loading={isLoading} cssOverride={{margin: 'auto'}} color="#36d7b7"/>
      <Record element={data} sentid={(e)=>Setid(e)} sentincome={(e)=>setIncome(e)} sentexpense={(e)=>setExpense(e)}/>
    </div>
  );
}

export default App;
