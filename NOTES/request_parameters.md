## CREATING A SERVER

```
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
    res.json(members.filter(
            member => member.id===parseInt(req.params.id)
        ))
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
```

### At requesting *http://localhost:5000/api/members/1* the output will be

```
[
    {
        "id": 1,
        "name": "Naman",
        "email": "naman.mohan09@outlook.com",
        "status": "active"
    }
]
```

