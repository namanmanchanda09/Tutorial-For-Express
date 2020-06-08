const express = require('express');
const path = require('path');

const app = express();

// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// })

const members = [
    {
        id:1,
        name:'Naman',
        email:'naman.mohan09@outlook.com',
        status:'active'
    },
    {
        id:2,
        name:'Tom',
        email:'tom@gmail.com',
        status:'inactive'
    },
    {
        id:3,
        name:'Doug',
        email:'doug@gmail.com',
        status:'active'
    }
]

// Gets all members
app.get('/api/members',(req,res)=>{
    res.json(members);

})

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));






