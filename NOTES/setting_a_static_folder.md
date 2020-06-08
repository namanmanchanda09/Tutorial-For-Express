## SETTING A STATIC FOLDER `public/`

### A static folder consists of HTML templates and CSS styling to be rendered on the web page.

```
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server started on port ${PORT}`));
```
