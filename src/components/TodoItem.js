import React from 'react'

const TodoItem = (props) => {
  return (
    <>
    <div>
      <h4>
        {props.todo.title}
      </h4>
      <p>{props.todo.des}</p>
      <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
     
    </div>
     <hr/>
     </>
  )
}

export default TodoItem
