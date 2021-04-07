import React from 'react'
import inputvoter from './new_voter'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

function Voter()
{
    
    return(
        <Router>
        <div className="voter">
            <Switch>
            <Route path='/voter/new'component={inputvoter}/>
            <h2>New voter registration</h2>
            <h2>Edit existing voter details</h2>
            <h2>Delete voter registration</h2>
            </Switch>
        </div>
        </Router>
    );
}
    
export default Voter;