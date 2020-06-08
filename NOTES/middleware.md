## CREATING A MIDDLEWARE

### Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle.

```
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

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));

```
### Whenver a GET request is made, the output at the console is 

```
Server started on port 5000
http://localhost:5000/api/members
```



