// collect and prep ingredients
const db = require('../db.js');


//cook.
async function getAll(){
    const users = await db.any(`select * from users`);
    console.log(users);
    const allTodos = users.map(async user =>{
        const userTodos = await db.any(`select * from todos where user_id = $1`,[user.id]);
        user.todos = userTodos;
        return user;
})
    const arrayOfUsersWithTodos = await Promise.all(allTodos);
    return arrayOfUsersWithTodos;
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

//accept an object argument so that we have flexibility later on.
//that is we can add more database columns
//without having to update all of our function calls.
//whens someone calls this, they do not have to know we're destructuring.


async function createUser({displayname, username}) {
    // const {displayname, username} = userDataObj;
    const newUserInfo = await db.one(`
    insert into users
        (displayname, username)
    values($1,$2)

    returning *

    `, [displayname,username]);
    console.log(newUserInfo);

    return newUserInfo;
}


// serve.
module.exports = {getAll, getOne, createUser};