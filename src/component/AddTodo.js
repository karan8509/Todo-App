// import React, { useRef, useState } from 'react'
// import '../style/addTodo.css'
// const AddTodo = () => {
//     const additem = useRef()
//     const [store, setStore] = useState([])

//     const handleClick = (event) => {
//         event.preventDefault()
//         setStore([...store, additem.current.value])
//     }
//     return (
//         // <div className='container' >
//             <div className='main-container'>
//                 <div className='main'>
//                     <input type="text" ref={additem} placeholder='Add item' />
//                     <button onClick={handleClick}>Add</button>
//                 </div>
//                 <ul>
//                     {
//                         store.map((_item, _) => (
//                             <li key={_} className="todo-item">
//                                 <span>{_item}</span>
//                                 <button>Delete</button>
//                             </li>
//                         ))
//                     }
//                 </ul>
//             </div>
//         </div >
//     )
// }

// export default AddTodo




import React, { useState } from 'react'
import TodoDelete from './TodoDelete'
import '../style/addTodo.css'
const AddTodo = () => {
    const [todoad, setTodoad] = useState("")
    const [item, setItem] = useState([])

    const addtodos = () => {
        if (todoad.trim() === "")
            return;
        setItem([...item, todoad])
    }

    const deleteTodo = (_element) => {
        const newItem = item.filter((_el, _ID) => _ID === _element)
        setItem(newItem)
    }



    return (
        <center>
            <div className='container-main'>
                <div className='main'>
                    <input type='text' placeholder='' value={todoad} onChange={(e) => setTodoad(e.target.value)} />
                    <button onClick={addtodos}>Add</button>
                </div>
                <ul>
                    {item.map((_element, _index) => (
                        <li key={_index}>
                            <span >{_element}</span>
                            <TodoDelete deleteElementvalue={_element} deleteTodobutton={deleteTodo} />
                        </li>
                    ))}
                </ul>
            </div>
        </center>
    )
}

export default AddTodo
