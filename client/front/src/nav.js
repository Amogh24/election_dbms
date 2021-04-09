
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
          <button className='B'>Voter</button>
          </Link>
          <Link style={linkStyle} to ='/candidate'>
          <button className='B'>Candidate</button>
          </Link>
          <Link style={linkStyle} to ='/study'>
          <button className='B'>Demographic Study</button>
          </Link>
          <Link style={linkStyle} to ='/officer'>
          <button className='B'>Election Officers</button>
          </Link>
          
      </ul>
      </div>
     
    );
}
export default Nav;