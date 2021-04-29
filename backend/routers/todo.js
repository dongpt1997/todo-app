const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')

router.post('/', async (req, res) => {
    const todo = new Todo({
        title: req.body.title

    })
    console.log(req.body.title);
    try {
        const newTodo = await todo.save()
        return res.json(newTodo)
    } catch (error) {
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    const todos = await Todo.find()
    return res.json(todos)
})

router.delete('/:id', async (req, res) => {
    const deleteById = { _id: req.params.id }
    const deleteTodo = await Todo.findByIdAndDelete(deleteById)
    return res.json({ success: true, message: 'xoá thành công', deleteTodo })
})

router.put('/:id', async (req, res) => {
    const updateById = { _id: req.params.id }
    const todo = {
        title: req.body.title
    }
    try {
        const updateTodo = await Todo.findOneAndUpdate(updateById, todo, { new: true })
        res.json(updateTodo)
    } catch (error) { error.message }
})

module.exports = router