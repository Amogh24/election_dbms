import './App.css';
import Voter from './voter.js';
import Nav from './nav.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <h1>Electoral Database</h1>
      <Switch>
      <Route path="/" exact component={Nav}/>
      <Route path="/voter" exact component={Voter}/>
      </Switch>
    </div>
    </Router>

  );
}

export default App;
