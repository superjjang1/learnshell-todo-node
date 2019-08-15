// collect and prep ingredients
const db = require('../db.js');


//cook.
function getAll(){
    return db.any(`
    select * from users`)
    .catch((err)=>{
        console.log('no users?');
        console.log(err);
    });
};


function getOne(id){
    return db.one(`
    select * from users where id=$1`,[id])
    .then((user)=>{
        //get the todos for the user
        const todos = db.any(`
        select * from todos where user_id = $1`, [id])
    .then((todosForUser)=>{
        console.log(todosForUser);
        user.todos = todosForUser;
        return user;
    })
    return todos;
    })
    .catch((err)=>{
        console.log('Oh No, no user');
        console.log(err);
    });
};


// serve.
module.exports = {getAll, getOne};