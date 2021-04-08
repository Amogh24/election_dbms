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

 return(
     <div>
         <h1 className='text-center mt-5'>New Voter registration</h1>
         <form onSubmit ={addPerson}>
             <div>
                 name: <input value = {newName}
                 onChange = {handleName}/>
                 age: <input value = {newAge}
                 onChange = {handleAge}/>
                 gender: <input value = {newGender}
                 onChange = {handleGender}/>
                 mail: <input value = {newMail}
                 onChange = {handleMail}/>
                 address: <input value = {newAddress}
                 onChange = {handleAddress}/>
                 phone: <input value = {newPhone}
                 onChange = {handlePhone}/>
                 date: <input value = {newDate}
                 onChange = {handleDate}/>
                 constituency: <input value = {newConsti}
                 onChange = {handleConsti}/>

             </div>
             </form>
             
     </div>
 )
}

export default Inputvoter;