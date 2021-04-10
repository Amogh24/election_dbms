import React, { useEffect,useState } from 'react';

const func = (x) =>
{
    if(x.consti_id === 1)
    {
        x.consti_name = 'New Delhi'
    }
    else if(x.consti_id === 34)
    {
        x.consti_name = 'Chandni Chowk'
    }
    else if(x.consti_id === 35)
    {
        x.consti_name = 'North East Delhi'
    }
    else if(x.consti_id === 36)
    {
        x.consti_name = 'East Delhi'
    }
    else if(x.consti_id === 37)
    {
        x.consti_name = 'North West Delhi'
    }
    else if(x.consti_id === 38)
    {
        x.consti_name = 'West Delhi'
    }
    else 
    {
        x.consti_name = 'South Delhi'
    }
}

const Officer = () =>
{

    const [officers,setOfficers] = useState([])
    const [constis,setconstis] = useState([]) 
    const getOfficers = async()=>
    {
        const response = await fetch('http://localhost:5000/officer')
        const data = await response.json()
        console.log(data)
        setOfficers(data)
    }
    
    const getConsti = async()=>
    {
        const res = await fetch('http://localhost:5000/consti')
        const consti = await res.json()
        console.log(consti)
        setconstis(consti)
    }

useEffect(()=>{
    getOfficers();
},[])
useEffect(()=>{
    getConsti();
},[])



officers.forEach(func)
console.log(officers)
return(
    
    <div>
         <table className="t">
    <thead>
      <tr className="tr"> 
        <th>Officer ID</th>
        <th>Officer Name</th>
        <th>Constituency</th>
      </tr>
    </thead>
    <tbody>
      {/*<tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>*/}
     {officers.map(officer => (
         <tr key={officer.officer_id}>
             <td>{officer.officer_id}</td>
             <td>{officer.name}</td>
             <td>{officer.consti_name}</td>
         </tr>
     ))}
    </tbody>
  </table>
    </div>
    
)
}

export default Officer;