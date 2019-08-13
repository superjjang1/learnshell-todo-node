const db = require('../db.js');
console.log('something');
function getAll(){
        return db.any(`
            select * from todos
        `)
            // .then((data)=>{
        
            //     console.log('here is the data:');
            //     console.log(data);
        
        // })
            .catch((err)=>{
             console.log("NOOOOoOoooOOoOOoOO.");
             console.log(err);
        });
    
    };

function getOne(id) {
    db.one(`
        select * from todos where id=$1
    `,[id])
        .then((data)=>{
    
            console.log('here is the data:');
            console.log(data);
    
    })
        .catch((err)=>{
         console.log("NOOOOoOoooOOoOOoOO.");
         console.log(err);
    });

};

getAll();


module.exports = {
    //this is the same as getAll:getAll since keyname and value are the same

    getAll,
    getOne,
};
