import React, { useState } from 'react';

 const Edit = () =>
 {
     const [id,setId] = useState('');
     const [name,setName] = useState('');
     const [age,setAge] = useState('');
     const [gender,setGender] = useState('')
     const [mail,setMail] = useState('')
     const [address,setAddress] = useState('')
     const [phone,setPhone] = useState('')
     const [date,setDate] = useState('')
     const [consti,setConsti] = useState('')
     const handleID = (event) =>
    {
        setId(event.target.value)
    }
    const FetchVoter = async(event)=>{
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/voter/${id}`)
        const data = await response.json()
        console.log(data)
    setName(`${data[0].name}`)
    setAge(`${data[0].age}`)
    setGender(`${data[0].gender}`)
    setMail(`${data[0].email}`)
    setAddress(`${data[0].address}`)
    setPhone(`${data[0].phone}`)
    setDate(`${data[0].dob}`)
    setConsti(`${data[0].consti_id}`)

  
    }
    const updatePerson = async(event)=>
    {
        event.preventDefault();
       try{
        const person = 
        {
           name:name,
           age:age,
           gender:gender,
           address:address,
           phone:phone,
           dob:date,
           email:mail,
           consti_id:consti
        }
        if(window.confirm("Do you want to submit?"))
        {
            if(age<18)
        {
            window.alert("Age must be greater than 18")
        }
        console.log(person)
        const response = await fetch(`http://localhost:5000/voter/${id}`,{
           method:"PUT" ,
           headers:{"Content-Type": "application/json"},
           body : JSON.stringify(person)
        });
    }
       }
       catch(error){
           console.log(error.message)
       } 
}

    //name
const handleName = (event) =>
{
 console.log(event.target.value)
 setName(event.target.value)
}
//age
const handleAge = (event) =>
{
 console.log(event.target.value)
 
 setAge(event.target.value)
}
//gender
const handleGender = (event) =>
{
 console.log(event.target.value)
 setGender(event.target.value)
}
//mail
const handleMail = (event) =>
{
 console.log(event.target.value)
 setMail(event.target.value)
}
//address
const handleAddress = (event) =>
{
    console.log(event.target.value)
    setAddress(event.target.value)
}
//phone
const handlePhone = (event) =>
{
 console.log(event.target.value)
 setPhone(event.target.value)
}
//date
const handleDate = (event) =>
{
 console.log(event.target.value)
 setDate(event.target.value)
}
//constituency
const handleConsti = (event) =>
{
 console.log(event.target.value)
 setConsti(event.target.value)
}


    return(
        <div>
            <h1 className="heading">Edit Voter Details</h1>
        <form onSubmit={FetchVoter}>
        <input type="number" placeholder="enter your voter id" value={id} onChange={handleID}></input>
        <div>
            <button style={{backgroundColor:" rgb(62, 204, 62)",borderRadius:"5px",color:"white",height:"40px",width:"100px"}}>SUBMIT</button>
        </div>
        </form>
        <form onSubmit ={updatePerson}>
    <div>
        <label>NAME: </label><input placeholder="Name"type="text" value = {name}
        onChange = {handleName}/><br />
       <label>AGE:</label> <input placeholder="18" type="number" value = {age}
        onChange = {handleAge}/> <br />
       <label>GENDER: </label><input type="text" placeholder="enter Male or Female or other"value = {gender}
        onChange = {handleGender}/> <br />
        <label>EMAIL: </label><input value = {mail}
        onChange = {handleMail}/> <br />
        <label>ADDRESS: </label><input value = {address}
        onChange = {handleAddress}/><br />
        <label>PHONE: </label><input type="number"value = {phone}
        onChange = {handlePhone}/><br />
        <label>DATE: </label><input placeholder="DD-MM-YYYY"value = {date}
        onChange = {handleDate}/> <br />
       <label>CONSTITUENCY ID:</label> <input placeholder="check the list below to see your constituency ID"value = {consti}
        onChange = {handleConsti}/> <br />

    </div>
    <div>
        <button className="sub">ADD</button>
    </div>
    </form>
        </div>
    )
 }
 export default Edit;