import React, { useRef, useState } from 'react'
import '../style/addTodo.css'
const AddTodo = () => {
    const additem = useRef()
    const [store, setStore] = useState([])

    const handleClick = (event) => {
        event.preventDefault()
        setStore([...store, additem.current.value])
    }
    return (
        <div className='container' >
            <div className='main-container'>
                <div className='main'>
                    <input type="text" ref={additem} placeholder='Add item' />
                    <button onClick={handleClick}>Add</button>
                </div>
                <ul>
                    {
                        store.map((_item, _) => (
                            <li key={_} className="todo-item">
                                <span>{_item}</span>
                                <button>Delete</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default AddTodo
