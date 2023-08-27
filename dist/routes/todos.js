"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const todos = [];
router.get('/', (req, res) => {
    return res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: req.text
    };
    todos.push(newTodo);
    res.redirect('/');
});
router.delete('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos.splice(todoIndex, 1);
        return res.status(200).redirect('/');
    }
    else {
        return res.status(404).json({ Error: "item not found" }).redirect('/');
    }
});
router.put('/todos/:todoId', (req, res, next) => {
    const newText = req.query.newText;
    const tid = req.params.todoId;
    console.log(newText, tid);
    const todoIndex = todos.findIndex(todoItem => todoItem.id === tid);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: tid, "text": newText };
        return res.status(200).redirect('/');
    }
    else {
        return res.status(404).json({ Error: "item not found" }).redirect('/');
    }
});
exports.default = router;
