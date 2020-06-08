const express = require('express');
const path = require('path');
const members = require('./Members');

const app = express();

const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

// Init middleware
app.use(logger);

// Gets all members
app.get('/api/members',(req,res)=>{
    res.json(members);

})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));









