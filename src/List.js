import React from 'react'
import './List.css'
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';

function List(Data) {
  const result = {
    text:Data.element.text,
    amount:Data.element.amount,
    id:Data.element._id
  };
  
  return (
    <div className='ListContainer'>
      <div className="ListItem">
        <div className="Text">{Data.element.text}</div>
        <div className="Amount" style={{color:Data.element.amount>-1? 'green':'red'}}>{Data.element.amount.toLocaleString()}</div>
      </div>
      <div className="Icon">
        <CreateIcon style={{cursor:'pointer'}} onClick={()=>Data.sentid(result)}/>
        <DeleteIcon style={{cursor:'pointer'}} onClick={()=>Data.sentdel(result)}/>
      </div>
    </div>
  )
}

export default List