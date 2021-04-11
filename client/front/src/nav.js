
import React from 'react';
import {Link, link} from 'react-router-dom';

const linkStyle={
    color:"white"
}


 function Nav()
{
    return(
        
        
      <div className="nav">
         
      <ul className="list">
         
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
      </div>
     
    );
}
export default Nav;