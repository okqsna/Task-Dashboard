import Header from './Components/Header/Header';
import AddTodo from './Components/AddTodo/AddTodo';
import TodoList from './Components/TodoList/TodoList';
import './App.css';
import {useState} from 'react';
function App(){
  const [todo, setTodo]=useState([
  ]);
  return(
    <div className="App">
      <div className="main__app">
      <Header />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo}/>
      </div>
  </div>
  )
}
export default App;