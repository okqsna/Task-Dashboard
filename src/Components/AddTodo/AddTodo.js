import React, { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './AddTodo.css';

function AddTodo({todo, setTodo}){
    const [value, setValue]=useState('');
    function saveTodo(){
        if(todo.length<8){
            setTodo(
                [...todo, {
                    id: uuid(),
                    title: value,
                    status: true
                }]
            );
            console.log(todo);
            setValue('');
        }else{
            alert('You can not add more than 8 tasks');
        }
    }
    return(
        <div className="AddTodo">
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} placeholder="type it here"></input>
        <button onClick={saveTodo} className="add__btn">Add</button>
        </div>
    )

}
export default AddTodo;