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
          <li><h2>Voter</h2></li>
          </Link>
          <Link to ='/candidate'>
          <li><h2>Candidate</h2></li>
          </Link>
      </ul>
      </div>
    );
}
export default Nav;