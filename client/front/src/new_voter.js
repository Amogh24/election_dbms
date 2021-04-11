import React,{useState,useEffect} from 'react'

const Inputvoter = () =>
{
    //const [person,setPerson] = useState([]);
    const [name,setName] = useState('');
    const [age,setAge] = useState();
    const [gender,setGender] = useState('')
    const [mail,setMail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState()
    const [date,setDate] = useState('')
    const [consti,setConsti] = useState()

const addPerson = async (event) =>
{
 event.preventDefault();
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
 if(age<18)
 {
     window.alert("Age must be greater than 18")
 }
 console.log(person)
 const response = await fetch("http://localhost:5000/voter/new",{
    method:"POST" ,
    headers:{"Content-Type": "application/json"},
    body : JSON.stringify(person)
 });

 const res = await fetch("http://localhost:5000/voter/id")
 const voter_id = await res.json()
 console.log(voter_id.max)
 window.alert(`Congratulations you have been registered as a voter. Your voter ID is ${voter_id.max}`)
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
         <h1 className='text-center '>New Voter registration</h1>
         <div class="container">
         <form onSubmit ={addPerson}>
             <div>
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center",marginBlockStart:"1"}}>NAME: <input placeholder="Name"type="text" value = {name}
                 onChange = {handleName}/></div><br />
                <div style= {{display:"flex",flexDirection:"row",alignItems:"center",marginBlockStart:"1"}}>AGE: <input placeholder="18" type="number" value = {age}
                 onChange = {handleAge}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>GENDER: <input type="text" placeholder="enter Male or Female or other"value = {gender}
                 onChange = {handleGender}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>EMAIL: <input value = {mail}
                 onChange = {handleMail}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>ADDRESS: <input value = {address}
                 onChange = {handleAddress}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>PHONE: <input type="number"value = {phone}
                 onChange = {handlePhone}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>DATE: <input value = {date}
                 onChange = {handleDate}/></div> <br />
                 <div style= {{display:"flex",flexDirection:"row",alignItems:"center"}}>CONSTITUENCY: <input value = {consti}
                 onChange = {handleConsti}/></div> <br />

             </div>
             <div>
                 <button className="sub">ADD</button>
             </div>
             </form>
             </div>
            <button>List of Constituencies</button>
             
             
     </div>
 )

}

export default Inputvoter;