const express = require('express');
const cors = require('cors');
const { response } = require('express');


const app = express();
app.use(cors())

app.get('/',(req,res)=>
{
    res.send('<h1>Hello</h1>')
})

app.listen(5000,()=>
{
    console.log("server has started on port 5000")
})