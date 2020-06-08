## RETURNING JSON AS A RESPONSE

```
const express = require('express');
const path = require('path');

const app = express();

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

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

```

### RESPONSE AT *http://localhost:5000/api/members* 

```
[
    {
        "id": 1,
        "name": "Naman",
        "email": "naman.mohan09@outlook.com",
        "status": "active"
    },
    {
        "id": 2,
        "name": "Tom",
        "email": "tom@gmail.com",
        "status": "inactive"
    },
    {
        "id": 3,
        "name": "Doug",
        "email": "doug@gmail.com",
        "status": "active"
    }
]
```
