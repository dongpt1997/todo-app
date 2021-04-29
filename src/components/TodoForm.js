import React, { useState } from 'react'

const TodoForm = ({ addTodo, updateTodo }) => {
    const [title, setTitle] = useState('')

    const onTitleOnchange = (e) => {
        setTitle(e.target.value)
    }

    const hadleSubmit = (e) => {
        e.preventDefault()
        addTodo({
            title
        })
        setTitle('')
    }

    return (
        <div >
            <form onSubmit={hadleSubmit}>
                <input type='text' placeholder='Enter your todo...' onChange={onTitleOnchange} value={title} required />
                <input type="submit" value="Add todo" />
            </form>
        </div>
    )
}

export default TodoForm
