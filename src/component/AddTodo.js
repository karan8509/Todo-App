import React, { useReducer, useState } from 'react';
import TodoDelete from './TodoDelete';
import '../style/addTodo.css';

const reducers = (current, action) => {
    if (action.type === "NEW_ITEM") {
        return [...current, action.payload.todoText]; 
    } else if (action.type === "DELETE_ITEM") {
        return current.filter((_el, _ID) => _ID !== action.payload.index); 
    }
    return current;
};

const AddTodo = () => {
    const [todoText, setTodoText] = useState("");
    const [items, dispatch] = useReducer(reducers, []);

    const addTodo = () => {
        if (todoText.trim() === "") return;
        dispatch({ type: "NEW_ITEM", payload: { todoText } });
        setTodoText(""); 
    };

    const deleteTodo = (index) => {
        dispatch({ type: "DELETE_ITEM", payload: { index } });
    };

    return (
        <center>
            <div className='container-main'>
                <div className='main'>
                    <input 
                        type='text' 
                        placeholder='Please Add New Task' 
                        value={todoText} 
                        onChange={(e) => setTodoText(e.target.value)} 
                    />
                    <button onClick={addTodo}>Add</button>
                </div>
                <ul>
                    {items.map((_element, _index) => (
                        <li key={_index}>
                            <span>{_element}</span>
                            <TodoDelete deleteElementvalue={_index} deleteTodobutton={deleteTodo} />
                        </li>
                    ))}
                </ul>
            </div>
        </center>
    );
};

export default AddTodo;
