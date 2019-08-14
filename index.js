// const http = require('http');
//replace http with express
const express = require('express');
const Todo = require('./models/Todo');
//create the server and call it 'app'
const app = express();
//create a variable for the port number
const port = 3000;

// const server = http.createServer((req, res)=>{
    //replace with app.get()
app.get('/todos', (req, res)=>{
    console.log("You've got a request");
    const allTodos = Todo.getAll();
    allTodos
        .then((data)=> {
            console.log('omg its data');
            console.log(data);
            // res.end(JSON.stringify(data));
            res.json(data);
        })
    // console.log("\n\n================");
    // console.log(allTodos);
    // res.end(allTodos);
});

app.listen(port);



