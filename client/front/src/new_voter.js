import React,{useState,useEffect,Fragment} from 'react'
import List from './modal'


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
    const [constis,setconstis] = useState('')
    const [show,setShow] = useState(false)
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
 if(window.confirm("Do you want to submit?"))
 {
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

const getConsti = async()=>
{
    const res = await fetch('http://localhost:5000/consti')
    const consti = await res.json()
    console.log(consti)
    setconstis(consti)
}

useEffect(()=>{
    getConsti();
},[])

const Constilist = () =>
{
    return(
        <div>
        <h1 style={{color:"white",fontFamily:"Arial",marginTop:"20px"}}>List of Constituencies</h1>
         <table className="t">
    <thead>
      <tr className="tr"> 
        <th>Constituency ID</th>
        
        <th>Constituency</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
     {constis.map(c => (
         <tr key={c.consti_id}>
             <td>{c.consti_id}</td>
             <td>{c.consti_name}</td>
             
         </tr>
     ))}
    </tbody>
  </table>
    </div>
    )
}

const HandleClick = ()=>
{
    console.log(constis)
    setShow(!show)
   
}



 return(
     <div>
         <h1 className='h'>New Voter registration</h1>
         <div class="container">
         <form onSubmit ={addPerson}>
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
                 <label>DATE: </label><input placeholder="MM-DD-YYYY"value = {date}
                 onChange = {handleDate}/> <br />
                <label>CONSTITUENCY ID:</label> <input placeholder="check the list below to see your constituency ID"value = {consti}
                 onChange = {handleConsti}/> <br />

             </div>
             
             <div>
                 <button className="sub" >ADD</button>
             </div>
             </form>
             <button style={{backgroundColor:"rgb(204,0,0)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderRadius:"4px",marginBottom:"10px"}}onClick={HandleClick}>List of constituencies</button>
             {
                 show?<Constilist/>:null
             }
             </div>
      
     </div>
     
 )

}

export default Inputvoter;