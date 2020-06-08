const express = require('express');
// const path = require('path');
const members = require('./Members');
const logger = require('./middleware/logger');

const app = express();



app.use('/api/members',require('./routes/api/members'))



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));









