import { Router } from 'express'

import { Todo } from '../models/todo'
import  res, {req } from 'express/lib/response';
import { todo } from 'node:test';

const router = Router();

const todos: Todo[] = []

router.get('/', (req, res, next) => {
    res.status(200).json({todos: todos})
});

router.post('/todo', (req, res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    }

    todos.push(newTodo);
    res.redirect('/');
})

router.delete('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid)
    if(todoIndex >= 0) {
        todos.splice(todoIndex, 1)
        return res.status(200).redirect('/');
    }
    else {
        return res.status(404).json({Error: "item not found"}).redirect('/');
    }
})

router.put('/todos/:todoId', (req, res, next) => {
    const newText = req.query.newText;
    const tid = req.params.todoId;
    console.log(newText, tid);
    
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid)
    if(todoIndex >= 0) {
        todos[todoIndex] = {id: tid ,"text": newText};
        return res.status(200).redirect('/');
    }
    else {
        return res.status(404).json({Error: "item not found"}).redirect('/');
    }
})  

export default router;