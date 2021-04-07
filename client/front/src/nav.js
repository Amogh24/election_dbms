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
          <button className='B'>voter</button>
          </Link>
          <Link style={linkStyle} to ='/candidate'>
          <button className='B'>candidate</button>
          </Link>
          <Link style={linkStyle} to ='/study'>
          <button className='B'>demographic study</button>
          </Link>
          <Link style={linkStyle} to ='/officers'>
          <button className='B'>election officers</button>
          </Link>
      </ul>
      </div>
     
    );
}
export default Nav;