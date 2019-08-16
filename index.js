// const http = require('http');
//replace http with express
const express = require('express');
const Todo = require('./models/Todo');
const users = require('./models/User');
//create the server and call it 'app'
const app = express();
//create a variable for the port number
const port = 3000;
//use the urlEncoded middleware to read post bodies
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

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
app.get('/users',async (req, res)=>{
    console.log('request user has happened');
    const allUsers = await users.getAll();
    res.json(allUsers);
});

app.get('/users/:userId',async (req,res)=>{
    
    const theId = parseInt(req.params.userId, 10);
    const oneUser = await users.getOne(theId);
    res.json(oneUser);
    });


app.post('/users/', async (req, res)=>{
    console.log('post request');
    //.send is different from .end()
    const newUserInfo = await users.createUser(req.body
    //     {
    //     displayname: req.body.displayname,
    //     username: req.body.username
        
    // }
    );
    res.json(newUserInfo);
    console.log('here is the body');
    console.log(req.body);
});

app.post('/users/:userId/todos', async (req, res)=>{
    const exUserTask = await users.createUserTodo(req);
    res.json(exUserTask.id);
    console.log('above is post')
     
});



// server.listen(3000);
app.listen(port);



