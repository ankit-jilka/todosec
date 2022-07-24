import React from 'react'
import TodoItem from './TodoItem'
const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
  return (
    <div className='container my-3' style = {myStyle}>
        <h3 className=' my-3'>ToDos List</h3>
        {props.todos.length === 0 ? "No Todos to display..":
        props.todos.map((tds) => {
            
            return( 
            
            <TodoItem todo={tds} key={tds.srNo} onDelete={props.onDelete}/>
            
            
            )
        })
        }
        
    </div>
  )
}

export default Todos
