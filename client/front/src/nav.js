
import React from 'react';
import {Link, link} from 'react-router-dom';
import List from './modal'
const linkStyle={
    color:"white"
}


 function Nav()
{
    return(
        
        <div><h1 className="heading">Electoral Database</h1>
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
        <p style={{color:"white",fontSize:"20px"}}><i>"The ignorance of one voter in a democracy impairs the security of all"</i> - John F. Kennedy</p>
     <br/><br/><br/>
     <p style={{color:"white",fontSize:"20px"}}><i>"The ballot is stronger than the bullet"</i> - Abraham Lincoln</p>
     <br/><br/><br/>
     <p style={{color:"white",fontSize:"20px"}}><i>"Voting is not only our right,it is our power"</i> - Loung Ung</p>
     <br/><br/><br/>
     <p style={{color:"white",fontSize:"20px"}}><i>"The vote is the most important non-violent tool we have"</i> - John Lewis</p>
      </div>
      </div>
    );
}
export default Nav;