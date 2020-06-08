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






