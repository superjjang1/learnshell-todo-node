const http = require('http');
const Todo = require('./models/Todo');
const server = http.createServer((req, res)=>{
    console.log("You've got a request");
    const allTodos = Todo.getAll();
    allTodos
        .then((data)=> {
            console.log('omg its data');
            console.log(data);
            res.end(JSON.stringify(data));
        })
    // console.log("\n\n================");
    // console.log(allTodos);
    // res.end(allTodos);
});

server.listen(7000);



