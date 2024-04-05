import React from 'react'

const Todos = ({todos,deleteTodo}) => {
  return (
     todos.length>0 ?<ul className="todos">
      {
       todos.map(todo=><li key={todo.id} className="todos_item">
       <span className={todo.status ? 'todos_text todos_text_done ':'todos_text'}>{todo.name}</span>
       <div className="todos_buttons">
           <button onClick={()=>deleteTodo(todo.id)}>❌</button>
           <button disabled={todo.status}>✅</button>
       </div>
      </li>)
      }
  </ul>:""
  )
}

export default Todos