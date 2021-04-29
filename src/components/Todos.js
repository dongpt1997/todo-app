import axios from 'axios'
import React, { useState, useEffect } from 'react'


import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')
    console.log(todos);
    useEffect(() => {
        const getTodos = async () => {
            try {
                const res = await axios.get('http://localhost:4000/api/todo')
                console.log(res.data);
                setTodos(res.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        getTodos()
    }, [])

    const addTodo = async title => {
        try {
            const res = await axios.post('http://localhost:4000/api/todo',
                title
            )
            console.log(res.data);
            const newTodo = [...todos, res.data]
            setTodos(newTodo)
        } catch (error) {
            console.log(error.message);
        }
    }

    const deleteTodo = async id => {
        try {
            await axios.delete(`http://localhost:4000/api/todo/${id}`)
            const newTodo = todos.filter(todo => todo._id !== id)
            setTodos(newTodo)
        } catch (error) {
            console.log(error.message);
        }

    }

    const updateTodo = async (title) => {
        // try {
        //     const res = await axios.put(`http://localhost:4000/api/todo/${id}`,
        //         title
        //     )
        //     console.log(res.data);

        // } catch (error) { error.message }

    }





    return (
        <div className='todo-list'>
            <TodoForm addTodo={addTodo} />
            <ul>
                {
                    todos.map(todo => (
                        <TodoItem todo={todo} key={todo._id} deleteTodo={deleteTodo} updateTodo={updateTodo} />

                    ))

                }
            </ul>
        </div>
    )
}

export default Todos
