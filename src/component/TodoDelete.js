import React from 'react'

const TodoDelete = ({ deleteElementvalue, deleteTodobutton }) => {
    return (
        <div>
            <button onClick={() => deleteTodobutton(deleteElementvalue)} style={{ background: "red" }}>Delete</button>
        </div>
    )
}

export default TodoDelete
