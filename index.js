const express = require('express');
// const path = require('path');
const exphbs = require('express-handlebars');


const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Homepage Route
app.get('/',(req,res)=>{
    res.render('index',{
        title:'Members App',
        members
    });
})

// Handle Bars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// Members API Routes
app.use('/api/members',require('./routes/api/members'))



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));










