
import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React,{ useState , useEffect} from 'react';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (td) => {
      console.log("I am OnDelete of ToDo",td);
      setTodos(todos.filter((e) => {
        return e!==td;
      }))
      localStorage.setItem("todos",JSON.stringify(todos));
  }
  

const addTodo = (title,des) => {
  let sno;
  if(todos.length === 0){
    sno = 1;
  }
  else{
     sno = todos[todos.length - 1].srNo + 1;
  }
     const myTodo = {
      srNo: sno,
      title: title,
      des: des
    }
    setTodos([...todos,myTodo]);
    
      
    
}
const [todos, setTodos] = useState(initTodo);
useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
  
}, [todos])

  return (
    <>
    <Router>
      <Header title="MyToDoList" par = "New"/>
      <Routes>
        
        <Route index element={
                          <>
                          <AddTodo addTodo={addTodo}/> 
                          <Todos todos={todos} onDelete = {onDelete}/>
                          </>
                           }/>
        
          
        
        <Route path="/about" element={<About />}/>
          
        
      </Routes>
      
       <Footer /> 
      </Router>
    </>
  );
}

export default App;
