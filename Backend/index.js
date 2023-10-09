const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();


// app.use(bodyParser.json());
// app.use(cors);

app.post("/log", (req,res) => {
   res.send('hello')
})

app.listen('8080', ()=> {
    console.log('server starts');
})