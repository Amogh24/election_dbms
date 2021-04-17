
import React from 'react';
import {Link, link} from 'react-router-dom';
import List from './modal'
const linkStyle={
    color:"white"
}


 function Nav()
{
    return(
        
        <div><h1 className="heading"><u>Electoral Database</u></h1>
        <br/>
      <div className="nav">
        
      {/* <ul className="list">
         
          <Link style={linkStyle} to ='/voter'>
          <button className='B'><span>Voter</span></button>
          </Link>
          <Link style={linkStyle} to ='/candidate'>
          <button className='B'><span>Candidate</span></button>
          </Link>
          <Link style={linkStyle} to ='/study'>
          <button className='B'><span>Demographic Study</span></button>
          </Link>
          <Link style={linkStyle} to ='/officer'>
          <button className='B'><span>Election Officers</span></button>
          </Link>
           
      </ul>
       */}
        <ol>
        <li style={{textAlign:"left",color:"white"}}><p style={{color:"white",fontSize:"20px"}}> Click on "voter" for new voter registration or editing existent voter registration</p></li>
  
     <li style={{textAlign:"left",color:"white"}}><p style={{color:"white",fontSize:"20px"}}> Click on "candidates" for viewing list of candidates</p></li>
     
     <li style={{textAlign:"left",color:"white"}}><p style={{color:"white",fontSize:"20px"}}> Click on "election officers" to see list of election officers</p></li>
     
     <li style={{textAlign:"left",color:"white"}}><p style={{color:"white",fontSize:"20px"}}> Click on "demographic study" to gain some insight regarding each constituency</p></li>
     <br/>
     </ol>
     <br/><br/><br/><br/>
     <p style={{color:"white",fontSize:"20px"}}><i>"The ballot is stronger than the bullet"</i> - Abraham Lincoln</p>
      </div>
      </div>
    );
}
export default Nav;