import express from "express";

import bodyParser from 'body-parser';

const app = express();

import todosRoute from './routes/todos';

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: false}))

app.use(todosRoute);

function lis() {
    console.log("listening");
    app.listen(3000);
}

lis();