## SENDING A PUT REQUEST

#### The model is defined in `Members.js` in the root directory. A PUT request is made to update the existing models.

### `Members.js`
```
const members = [
    {
        id:1,
        name:'Naman',
        email:'naman.mohan09@outlook.com',
        status:'active'
    },
    {
        id:2,
        name:'David',
        email:'david@gmail.com',
        status:'inactive'
    },
    {
        id:3,
        name:'Doug',
        email:'doug@gmail.com',
        status:'active'
    }
]

module.exports = members;
```

### `index.js`
```
const express = require('express');
// const path = require('path');


const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Members API Routes
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


// POST REQUEST
router.post('/',(req,res)=>{
    // res.send(req.body);
    const newMember = {
        id:Math.floor(Math.random()*1000),
        name:req.body.name,
        email:req.body.email,
        status:'active'
    };
    if(!newMember.email || !newMember.name){
        res.status(400).json({msg:'Please include email and name.'})
    }else{
        members.push(newMember);
        res.send(members);
    }
})

// PUT REQUEST ~ Updating a member 
router.put('/:id', (req, res)=>{

    const found = members.some(
            member => member.id === parseInt(req.params.id)
        );

    if(found){
        const updMember = req.body;
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name : member.name;
                member.email = updMember.email ? updMember.email : member.email;
                res.json({msg:"member was updated",
                member
            });

            }
        })
    }else{
        res.status(400).json(
            { message : `Member not found with id of ${req.params.id}.` }
        )  

    }
})


module.exports = router;
```
### When a PUT request is made at the end point *http://localhost:5000/api/members/2* with the body
```
{

	"email":"david123@gmail.com"
}
```
### The response is 
```
{
    "msg": "member was updated",
    "member": {
        "id": 2,
        "name": "David",
        "email": "david123@gmail.com",
        "status": "inactive"
    }
}
```





