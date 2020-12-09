const express = require('express');
const addRouter2 = express.Router();
function add2(nav){
    addRouter2.get('/',(req,res)=>{
        res.render("add2",   
        {nav,
        title:'Library'
    });
    });
    return addRouter2
}

module.exports = add2; 