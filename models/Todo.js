const db = require('../db.js');
console.log('something');



async function getAll(){
    try {
        return await db.any(`
            select * from todos
        `)
    }
        catch(error){
            console.log(error);
            return [];
        } 
    };

async function getOne(id) {

    try {
        const todosForOne = await db.one(`
            select * from todos where id=$1
        `,[id])
        return todosForOne;

    }catch(error){
        console.log('there was an issue')
        console.log(error);
        return{
            id:0
        }
    }
}

function create(userId, todoObj) {
    const { task } = todoObj;
    const todoId = db.one(`
        insert into todos 
            (priority, task, user_id)
        values 
            (1, $2, $1)
    
        returning id        
    `, [userId, task]);

    return todoId;
}




module.exports = {
    //this is the same as getAll:getAll since keyname and value are the same

    getAll,
    getOne,
    create
};
