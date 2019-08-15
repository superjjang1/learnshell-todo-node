// collect and prep ingredients
const db = require('../db.js');


//cook.
async function getAll(){
    const users = await db.any(`
    select * from users`)
    const allTodos = await db.any(`
    select * from todos`);
    users.todos = allTodos;
    return users;
};


async function getOne(id){
    try {
        const user = await db.one(`
        select * from users where id=$1`,[id]);
        const todosForUser = await db.any(`
        select * from todos where user_id=$1`, [id]);
        user.todos = todosForUser;
        return user;
    }
     catch(error){
         console.log('there was an error');
         return {
             id:0,
             displayname: 'no user found'
         };
     }
};


// serve.
module.exports = {getAll, getOne};