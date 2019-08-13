const db = require('../db.js');

function getAll(){
    function getAll() {
        db.one(`
            select * from todos where id=$1
        `,[id])
            .then((data)=>{
        
                console.log('here is the data:');
                console.log(data);
        
        })
            .catch((err)=>{
           log("NOOOOoOoooOOoOOoOO.");
             console.log(err);
        });
    
    }

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
       log("NOOOOoOoooOOoOOoOO.");
         console.log(err);
    });

};
module.exports = {
    //this is the same as getAll:getAll since keyname and value are the same

    getAll,
    getOne
};
