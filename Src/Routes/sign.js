const express = require('express');
const signRouter = express.Router();
function sign(nav){
    signRouter.get('/',(req,res)=>{
        res.render("sign",   
        {nav,
        title:'Library'
    });
    });
    return signRouter
}

module.exports = sign;