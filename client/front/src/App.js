import './App.css';
import Voter from './voter.js';
import Nav from './nav.js';
import Inputvoter from './new_voter.js'
import Officer from './officer.js'
import Edit from './editvoter.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
    
      <Switch>
      <Route path = "/" exact component={Nav}/>
      <Route path = "/voter" exact component={Voter}/>
      <Route path = '/newvoter'component={Inputvoter}/>
      <Route path = '/officer' component={Officer}/>
      <Route path = '/editvoter' component={Edit}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
