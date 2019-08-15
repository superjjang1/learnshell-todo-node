// const http = require('http');
//replace http with express
const express = require('express');
const Todo = require('./models/Todo');
const users = require('./models/User');
//create the server and call it 'app'
const app = express();
//create a variable for the port number
const port = 3000;

// const server = http.createServer((req, res)=>{
    //replace with app.get()
app.get('/todos', (req, res)=>{
    //adds a programatic breakpoint
    //for the chrome dev tools
    
    // debugger;
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


app.get('/todos/:taskId',(req, res)=>{
    console.log("you asked for a specific task");
    console.log(req.params.taskId);
    //convert the route param to a number
    //and make sure it's in base 10
    const theId = parseInt(req.params.taskId, 10);
    console.log(theId);
    const oneTodo = Todo.getOne(theId);
    console.log(oneTodo);
    oneTodo
        .then((data)=>{
            console.log('new data');
            console.log(data);
            res.json(data);
        })
});
app.get('/users',(req, res)=>{
    console.log('request user has happened');
    const allUsers = users.getAll();
    allUsers
        .then((data)=>{
            console.log(data);
            res.json(data);
        });
});
app.get('/users/:userId',(req,res)=>{
    console.log('ask for specific user');
    console.log(req.params.userId);
    const theId = parseInt(req.params.userId, 10);
    console.log(theId);
    const oneUser = users.getOne(theId);
    oneUser.then((data)=>{ res.json(data);
        });
    });
// server.listen(3000);
app.listen(port);



