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


async function getOne(id){
    const user = await db.one(`
    select * from users where id=$1`,[id]);
    const todosForUser = await db.any(`
    select * from todos where user_id=$1`, [id]);
    user. todos = todosForUser;
    return user;
};


// serve.
module.exports = {getAll, getOne};