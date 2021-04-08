import React from 'react'
import Inputvoter from './new_voter'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

const linkStyle={
    color:"black"
}

function Voter()
{
    
    return(
        <Router>
        <div className="voter">
         
            <Link style={linkStyle} to ='/newvoter'>
            <h2>New voter registration</h2>
            </Link>
            
            <h2>Edit existing voter details</h2>
            <h2>Delete voter registration</h2>
            
        </div>
        </Router>
    );
}
    
export default Voter;