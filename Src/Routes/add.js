const express = require('express');
const addRouter = express.Router();
function add(nav){
    addRouter.get('/',(req,res)=>{
        res.render("add",   
        {nav,
        title:'Library'
    });
    });
    return addRouter
}

module.exports = add; 