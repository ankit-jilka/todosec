import React, { useState } from 'react'

const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if(!title || !des){
            alert("Title or description cannot be blank..");
        }
        else{
        props.addTodo(title,des);
        setTitle("");
        setDes("");
        }
    }
  return (
    <div className='container my-3'>
        <h3>
            Add a ToDo
        </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
        
        </div>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">Description</label>
          <input type="text" value={des} onChange={(e) => setDes(e.target.value)} className="form-control" id="des" />
        </div>

        <button type="submit" className="btn btn-sm btn-success ">Add Todo</button>
      </form>
    </div>
  )
}

export default AddTodo
