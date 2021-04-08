import './App.css';
import Voter from './voter.js';
import Nav from './nav.js';
import Inputvoter from './new_voter'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <h1>Electoral Database</h1>
      <Switch>
      <Route path="/" exact component={Nav}/>
      <Route path="/voter" exact component={Voter}/>
      <Route path='/newvoter'component={Inputvoter}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
