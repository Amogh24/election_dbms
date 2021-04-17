import React from 'react'
import Inputvoter from './new_voter'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

const linkStyle={
    color:"black"
}

function Voter()
{
    
    return(
     
        <div className="voter">
         <p style={{color:"white",textAlign:"center",fontSize:"20px",marginLeft:"auto",marginRight:"auto"}}>Voting is a right that everyone should exercise. For new voter registration click on the button below</p>
        
            <br/>
             <Link to = "/newvoter">
                <div style={{alignItems:"center"}}>
                <button style={{backgroundColor:" rgb(10,50,239)",color:"white",marginTop:"0px",fontSize: "larger",height:"50px",borderColor:"black",borderRadius:"4px",marginLeft:"auto",marginRight:"auto"}}>
                    New Voter Registration
                </button>
                </div>
            </Link> 
            <br/><br/><br/><br/><br/><br/><br/><br/>
            <p style={{color:"white",textAlign:"center",fontSize:"20px",marginLeft:"auto",marginRight:"auto"}}>We all make mistakes. For editing your voter registration click on the button below</p>  
            <Link to = "/editvoter">
                <div style={{alignItems:"center"}}>
                <button style={{backgroundColor:" rgb(10,50,239)",color:"white",marginTop:"0px",fontSize: "larger",height:"50px",borderColor:"black",borderRadius:"4px",marginLeft:"auto",marginRight:"auto"}}>
                    Edit Voter Registration
                </button>
                </div>
            </Link>
      
            
        </div>
        
    );
}
    
export default Voter;