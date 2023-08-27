import { Router } from 'express'

import { Todo } from '../models/todo'

import { Request, Response } from 'express';

type RequestBody = {text: string};

type RequestParams = {todoId: string};

type RequestQuery = {newText: string};

const router = Router();

const todos: Todo[] = []

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({todos: todos})
});

router.post('/todo', (req: Request, res: Response) => {
    const body = req.body as RequestBody
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text
    }

    todos.push(newTodo);
    res.redirect('/');
})

router.delete('/todo/:todoId', (req: Request, res: Response) => {
    const params = req.params as RequestParams
    const tid = params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid)
    if(todoIndex >= 0) {
        todos.splice(todoIndex, 1)
        return res.status(200).redirect('/');
    }
    else {
        return res.status(404).json({Error: "item not found"}).redirect('/');
    }
})

router.put('/todos/:todoId', (req: Request, res: Response) => {
    const params = req.params as RequestParams
    const query = req.params as RequestQuery
    const newText = query.newText;
    const tid = params.todoId;
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