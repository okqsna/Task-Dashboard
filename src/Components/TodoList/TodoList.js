import React from 'react';
import './TodoList.css';
function TodoList({ todo, setTodo }) {
    function deleteTodo(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }
    return (
        <div className='task__space'>
            {todo.map(item => (
                <div key={item.id} className="task">
                    <h4>{item.title}</h4>
                    <button onClick={() => deleteTodo(item.id)} className="done__btn">✓</button>
                </div>
            ))
            }
        </div>
    )
}

export default TodoList;