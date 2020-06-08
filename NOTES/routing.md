## ROUTING IN EXPRESS

### `index.js`
```
const express = require('express');
// const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

app.use('/api/members',require('./routes/api/members'))

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
```

### `routes/api/members.js`
```
const express = require('express');
const router = express.Router();
const members = require('../../Members')

// Gets all members
router.get('/',(req,res)=>{
    res.json(members);

})

// Get a single member
router.get('/:id', (req, res)=>{
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

module.exports = router;
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

### At requesting *http://localhost:5000/api/members/4* the output will be

```
{
    "message": "Member not found with id of 4."
}
```





