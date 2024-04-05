import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

const TodoField = ({addTodo}) => {
  const [value,setValue]=useState("");
  return (
    <div className='todofield'>
         <input value={value} onChange={(e)=>setValue(e.target.value)} type="text" className="todofield_input" />
         <button className="todofield_btn" onClick={()=>addTodo({
           id:uuidv4(),
           name:value,
           status:false
           })}>
            add
         </button>
    </div>
  )
}

export default TodoField;


