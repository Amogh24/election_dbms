import React,{useState,useEffect} from 'react'

const Inputvoter = () =>
{
    //const [person,setPerson] = useState([]);
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState('')
    const [mail,setMail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState(0)
    const [date,setDate] = useState('')
    const [consti,setConsti] = useState(0)

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
         <form onSubmit ={addPerson}>
             <div>
                 NAME: <input type="text" value = {name}
                 onChange = {handleName}/>
                 AGE: <input type="number" value = {age}
                 onChange = {handleAge}/>
                 GENDER: <input type="text"value = {gender}
                 onChange = {handleGender}/>
                 EMAIL: <input value = {mail}
                 onChange = {handleMail}/>
                 ADDRESS: <input value = {address}
                 onChange = {handleAddress}/>
                 PHONE: <input type="number"value = {phone}
                 onChange = {handlePhone}/>
                 DATE: <input value = {date}
                 onChange = {handleDate}/>
                 CONSTITUENCY: <input value = {consti}
                 onChange = {handleConsti}/>

             </div>
             <div>
                 <button className="sub">ADD</button>
             </div>
             </form>
             <h2 className="heading">INSTRUCTIONS</h2>
             <ol className="ol">
                 <li className="instructions"><p>All the entries are mandatory</p></li>
                 <li className="instructions"><p>Mail must be of the format "xyz@abc"</p></li>
                 <li className="instructions"><p>Date must be of the format "DD-MM-YYYY"</p></li>
                 <li className="instructions"><p>Click below for list of constituencies:</p></li>
                 <button>List of Constituencies</button>
             </ol>
             
     </div>
 )

}

export default Inputvoter;