const express = require('express');
// const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Gets all members
app.get('/api/members',(req,res)=>{
    res.json(members);

})

// Get a single member
app.get('/api/members/:id', (req, res)=>{
    if(req.params.id >3){
        res.status(400).json(
                { message : `Member not found with id of ${req.params.id}.` }
            )  
    }else{

    

    res.json(members.filter(
            member => member.id===parseInt(req.params.id)
        ))
    }
})



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));









