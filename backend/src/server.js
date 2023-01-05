const express = require('express')
const routes = require('./routes')
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Olá mundo')
});

app.use(routes)

app.listen(3000, () =>{
    console.log('Listening on port 3000')
});