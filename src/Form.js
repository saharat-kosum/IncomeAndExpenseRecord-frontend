import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Form.css'

function Form(props) {
    const [text,Settext]=useState('');
    const [amount,Setamount]=useState('');
    const [isUpdate,SetisUpdate]=useState(false);
    const [id,Setid]=useState('');

    useEffect(()=>{
        if(props.element){
            Settext(props.element.text);
            Setamount(props.element.amount);
            Setid(props.element.id);
            SetisUpdate(true);
        }
    },[props.element]);

    const addRecord = ()=>{
        if(text&&amount){
            if(isUpdate){
                axios.post('https://incomeandexpenserecord-backend.onrender.com/update',{text,amount,id})
                .then((res)=>{
                    Settext('');
                    Setamount('');
                    SetisUpdate(false);
                    props.sentdata(res.data);
                }).catch(err=>console.log(err));
            }
            else{            
                axios.post('https://incomeandexpenserecord-backend.onrender.com/save',{text,amount})
                .then((res)=>{
                    Settext('');
                    Setamount('');
                    props.sentdata(res.data);
                }).catch(err=>console.log(err));
            }
        }
    }

  return (
    <div className="Form">
        <form action="/save" method='post'>
            <div className='Input'>
                <h2>Income, Expense</h2>
                <input type="text" onChange={(e)=>Settext(e.target.value)} value={text} placeholder='Description ...' />
            </div>
            <div className='Input'>
                <h2>Amount (+IN , -OUT)</h2>
                <input type="number" onChange={(e)=>Setamount(e.target.value)} value={amount} placeholder='Amount ...' />
            </div>
            <div className='btn' onClick={addRecord}>{isUpdate? 'Update':'Submit'}</div>
        </form>
  </div>
  )
}

export default Form