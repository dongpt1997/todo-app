import React, { useState } from 'react'
import Modal from 'react-modal'
const TodoItem = ({ todo, deleteTodo, updateTodo }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [title, setTitle] = useState(todo.title)

    const style = {
        background: 'rgb(240,240,240)',
        color: 'black'
    }
    const handleSubmitUpdate = (e) => {
        e.preventDefault()
        updateTodo({
            title
        })

    }
    const onTitleOnchange = (e) => {
        setTitle(e.target.value)
    }
    return (

        <div>
            <Modal isOpen={modalIsOpen} updateTodo={updateTodo}>
                <h2>Edit todo</h2>
                <form onSubmit={handleSubmitUpdate}>
                    <input type="text" onChange={onTitleOnchange} value={title} />
                    <input type="submit" value="Update todo" />
                </form>
            </Modal>
            <li
                style={style}>
                {todo.title}
                <button className="btn-delete" onClick={() => { deleteTodo(todo._id) }}>
                    Xoá
                </button>
                <button className="btn-update" onClick={() => setModalIsOpen(true)}>Update</button>
            </li>
        </div>
    )
}

export default TodoItem
