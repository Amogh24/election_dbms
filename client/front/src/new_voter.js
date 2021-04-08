import React,{useState,useEffect} from 'react'

const Inputvoter = () =>
{
    const [person,setPerson] = useState([]);
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [gender,setGender] = useState('')
    const [mail,setMail] = useState('')
    const [address,setAddress] = useState('')
    const [phone,setPhone] = useState(0)
    const [date,setDate] = useState('')
    const [consti,setConsti] = useState(0)

const addPerson = () =>
{

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
         <h1 className='text-center mt-5'>New Voter registration</h1>
         <form onSubmit ={addPerson}>
             <div>
                 name: <input value = {name}
                 onChange = {handleName}/>
                 age: <input value = {age}
                 onChange = {handleAge}/>
                 gender: <input value = {gender}
                 onChange = {handleGender}/>
                 mail: <input value = {mail}
                 onChange = {handleMail}/>
                 address: <input value = {address}
                 onChange = {handleAddress}/>
                 phone: <input value = {phone}
                 onChange = {handlePhone}/>
                 date: <input value = {date}
                 onChange = {handleDate}/>
                 constituency: <input value = {consti}
                 onChange = {handleConsti}/>

             </div>
             </form>
             
     </div>
 )
}

export default Inputvoter;