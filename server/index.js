const express = require('express');
const cors = require('cors');
const { response } = require('express');
const pool = require("./db");


const app = express();
app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>
{
    res.send('<h1>Hello</h1>')
})

app.post("/consti", async (req,res)=>
{
    try {
        console.log(req.body)
        const {consti_name} =req.body;
        const newconsti = await pool.query(
            "INSERT INTO constituency (consti_name) VALUES($1) RETURNING *",
            [consti_name]
           
        )
        res.json(newconsti);
    } catch (error) {
        console.error(error.message)
    }
})

app.listen(5000,()=>
{
    console.log("server has started on port 5000")
})