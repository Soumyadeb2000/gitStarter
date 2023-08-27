import express from "express";

const app = express();

import bodyParser from 'body-parser'

import todosRoute from './routes/todos';

app.use(bodyParser.json())

app.use(todosRoute);

function lis() {
    console.log("listening");
    app.listen(3000);
}

lis();