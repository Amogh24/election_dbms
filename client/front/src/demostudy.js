import React,{useState,useEffect} from 'react'

const Study = () =>
{
   
    const [id,setId] = useState();
    const [constis,setconstis] = useState([])
    const [avoters,setAvoters] = useState([])
    const [fvoters,setFvoters] = useState([])
    const [yvoters,setYvoters] = useState([])
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [show3,setShow3] = useState(false)

    const getConsti = async() =>
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
            <h1 className="h">List of Constituencies</h1>
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
    
    // const getAllvoters = async()=>
    // {
    //     const res = await fetch(`http://localhost:5000/voter/consti/${id}`)
    //     const av = await res.json()
    //     console.log(av)
    //     setAvoters(av)
    // }
    
    // useEffect(()=>{
    //     getAllvoters();
    // },[])
    
    const Avlist = () =>
    {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                
            <h1 className="h">List of all voters</h1>
             <table className="t" >
        <thead>
          <tr className="tr"> 
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
         {avoters.map(c => (
             <tr key={c.v_id}>
                 <td>{c.name}</td>
                 <td>{c.age}</td>
                 <td>{c.gender}</td>
                 
             </tr>
         ))}
        </tbody>
      </table>
        </div>
        )
    }

    const Fvlist = () =>
    {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                
            <h1 className="h">List of all Female voters</h1>
             <table className="t">
        <thead>
          <tr className="tr"> 
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
         {fvoters.map(c => (
             <tr key={c.v_id}>
                 <td>{c.name}</td>
                 <td>{c.age}</td>
                 <td>{c.gender}</td>
                 
             </tr>
         ))}
        </tbody>
      </table>
        </div>
        )
    }


    const Yvlist = () =>
    {
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                
                
            <h1 className="h">List of all young voters</h1>
             <table className="t">
        <thead>
          <tr className="tr"> 
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
           
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
         {yvoters.map(c => (
             <tr key={c.v_id}>
                 <td>{c.name}</td>
                 <td>{c.age}</td>
                 <td>{c.gender}</td>
                 
             </tr>
         ))}
        </tbody>
      </table>
        </div>
        )
    }

    const Handlea = () =>
    {
        setShow1(!show1)
        setShow2(false)
        setShow3(false)
    }

    const Handlef = () =>
    {
        setShow1(false)
        setShow2(!show2)
        setShow3(false)
    }

    const Handley = () =>
    {
        setShow1(false)
        setShow2(false)
        setShow3(!show3)
    }




    const HandleClick = ()=>
    {
        console.log(constis)
        setShow(!show)
       
    }

    const handleID = async(event) =>
    {
        event.preventDefault()
        setId(event.target.value)
        const res = await fetch(`http://localhost:5000/voter/consti/${id}`)
        const av = await res.json()
        console.log(av)
        setAvoters(av)

        const res2 = await fetch(`http://localhost:5000/voter/fconsti/${id}`)
        const fv = await res2.json()
        console.log(fv)
        setFvoters(fv)

        const res3 = await fetch(`http://localhost:5000/voter/yconsti/${id}`)
        const yv = await res3.json()
        console.log(yv)
        setYvoters(yv)
    }
    return(
        
        <div>
            <h1 className="h">Demographic Study</h1>
        <label>Constituency ID:</label><input type="number" placeholder="enter your constituency ID" value={id} onChange={handleID}></input>
       
        <button style={{backgroundColor:" rgb(204,0,0)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderRadius:"4px",marginBottom:"10px"}}onClick={HandleClick}>List of constituencies</button>
             {
                 show?<Constilist/>:null
             }
              <div>
                 <button className="sub" onClick={handleID}>Submit</button>
             </div>
             <ul style={{listStyleType:"none"}}>
                 <li style={{float:"left",marginLeft:"100px",marginRight:"100px"}}><button style={{backgroundColor:" rgb(10,50,239)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderColor:"black",borderRadius:"4px",marginBottom:"10px"}}onClick={Handlea} >List of all voters</button></li>
                 <li style={{float:"left",marginLeft:"220px",marginRight:"10px"}}><button style={{backgroundColor:" rgb(10,50,239)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderColor:"black",borderRadius:"4px",marginBottom:"10px"}}onClick={Handlef}>List of all female voters</button></li>
                 <li style={{float:"left",marginLeft:"220px",marginRight:"10px"}}><button style={{backgroundColor:" rgb(10,50,239)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderColor:"black",borderRadius:"4px",marginBottom:"10px"}}onClick={Handley}>List of all young voters</button></li>
                 {
                     show1?<Avlist/>:null 
                 }
                
                 {
                     show2?<Fvlist/>:null
                 }
               
                 {
                     show3?<Yvlist/>:null
                 }
                  
             </ul>
        </div>
    )
}

export default Study;