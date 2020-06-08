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




