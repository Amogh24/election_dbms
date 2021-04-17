import React,{useState,useEffect} from 'react'; 

 const Candidate = () =>
 {
    const [id,setId] = useState();
    const [constis,setconstis] = useState([])
    const [show,setShow] = useState(false)
    const [show1,setShow1] = useState(false)
    const [show2,setShow2] = useState(false)
    const [allcandidates,setAllcandidates] = useState([])
    const [cc,setCc] = useState([])

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


    const getCandidates = async() =>
    {
        const res = await fetch('http://localhost:5000/candidate')
        const candidate = await res.json()
        console.log(candidate)
        setAllcandidates(candidate)
    }
    
    useEffect(()=>{
        getCandidates();
    },[])
    
    const Candilist = () =>
    {
        return(
            <div>
            <h1 className="h">List of all candidates</h1>
             <table className="t">
        <thead>
          <tr className="tr"> 
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Constituency</th>
            <th>Political Party</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
         {allcandidates.map(c => (
             <tr key={c.consti_id}>
                 <td>{c.name}</td>
                 <td>{c.age}</td>
                 <td>{c.gender}</td>
                 <td>{c.constituency}</td>
                 <td>{c.political_party}</td>
             </tr>
         ))}
        </tbody>
      </table>
        </div>
        )
    }

    const ConstiCandilist = () =>
    {
        return(
            <div>
            <h1 className="h">List of all candidates</h1>
             <table className="t">
        <thead>
          <tr className="tr"> 
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Constituency</th>
            <th>Political Party</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>*/}
         {cc.map(c => (
             <tr key={c.consti_id}>
                 <td>{c.name}</td>
                 <td>{c.age}</td>
                 <td>{c.gender}</td>
                 <td>{c.constituency}</td>
                 <td>{c.political_party}</td>
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
        setShow1(false)
        setShow2(false)
       
    }

    const Handleall = () =>
    {
        setShow1(!show1)
        setShow(false)
        setShow2(false)
    }

    const handleID = async(event) =>
    {
        event.preventDefault()
        setId(event.target.value)
        const res = await fetch(`http://localhost:5000/candidate/${id}`)
        const av = await res.json()
        console.log(av)
        setCc(av)
        
    }

    const Handlec = () =>
    {
        setShow2(!show2)
        setShow(false)
        setShow1(false)
    }

    return(
        <div>
        <h1 className="h">List of Candidates</h1>
    <label>Constituency ID:</label><input type="number" placeholder="enter your constituency ID to view all candidates from your constituency" value={id} onChange={handleID}></input>
   
    <button style={{backgroundColor:" rgb(204,0,0)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderRadius:"4px",marginBottom:"10px"}}onClick={HandleClick}>List of constituencies</button>
   <button style={{backgroundColor:" rgb(204,0,0)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderRadius:"4px",marginBottom:"10px"}}onClick={Handleall}>List of all candidates</button>
   <div>
                 <button className="sub" onClick={handleID}>Submit</button>
             </div>
             <button style={{backgroundColor:" rgb(204,0,0)",color:"white",marginTop:"20px",fontSize: "larger",height:"50px",borderRadius:"4px",marginBottom:"10px"}}onClick={Handlec}>List of all candidates from your constituency</button>
        {
            show1?<Candilist/>:null
        }
        {
             show?<Constilist/>:null
         }
         {
             show2?<ConstiCandilist/>:null
         }
         </div>

    )
 }
 export default Candidate;