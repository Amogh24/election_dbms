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
//adding data to constituency
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

//view all constituencies
app.get("/consti",async (req,res)=>
{
    try {
        const allconsti = await pool.query(
            " SELECT * FROM CONSTITUENCY");
        res.json(allconsti.rows);
    } catch (error) {
        console.error(error.message)
    }
});

//add voter
app.post("/voter/new", async (req,res)=>
{
    try {
        console.log(req.body)
        const {name,age,gender,address,phone,dob,email,consti_id} =req.body;
        const newvoter = await pool.query(
            "INSERT INTO voter (name,age,gender,address,phone,dob,email,consti_id) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
            [name,age,gender,address,phone,dob,email,consti_id]
           
        )
        res.json(newvoter);
    } catch (error) {
        console.error(error.message)
    }
});

//view all voters
app.get("/voter",async (req,res)=>
{
    try {
        const allvoters = await pool.query(
            "SELECT * FROM VOTER");
        res.json(allvoters.rows);
    } catch (error) {
        console.error(error.message)
    }
});

//view a voter
app.get("/voter/:id",async (req,res)=>
{
    try {
        const {id}=req.params
        const voter = await pool.query(
            "SELECT * FROM VOTER where v_id=$1",[id]);
        res.json(voter.rows);
    } catch (error) {
        console.error(error.message)
    }
});

//udpate voter name
app.put("/voter/:id",async(req,res)=>
{
    const {id}=req.params
    const {name}=req.body
    const updatevoter= await pool.query(
        "UPDATE voter SET name = $1 WHERE v_id = $2",[name,id]
    )
    res.json("Voter name updated")
})
//delete voter
app.delete("/voter/:id",async(req,res)=>
{
    try {
        const {id} = req.params
        const delvoter = await pool.query("delete from voter where v_id = $1",[id])
        res.json("voter was deleted");
    } catch (error) {
        console.log(error)
        
    }
})
app.listen(5000,()=>
{
    console.log("server has started on port 5000")
})