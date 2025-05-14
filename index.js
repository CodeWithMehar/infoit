let express = require('express');
const { route } = require('./route');
let app = express();
app.use(route);

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});