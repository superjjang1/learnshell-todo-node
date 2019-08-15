const db = require('../db.js');
console.log('something');



async function getAll(){
        const todos = await db.any(`
            select * from todos
        `)
        return todos; 
    };

async function getOne(id) {
    const todosForOne = await db.one(`
        select * from todos where id=$1
    `,[id])
    return todosForOne;
};

getAll();


module.exports = {
    //this is the same as getAll:getAll since keyname and value are the same

    getAll,
    getOne,
};
