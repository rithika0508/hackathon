import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login1 from './SignUp/Login1';
import StartUp from './SignUp/StartUp';
import Investor from './SignUp/Investor';
import Homepg from './SignUp/Homepg'
import AllInvestors from './SignUp/AllInvestors'
import AllStartups from './SignUp/Allstartups'
import DetailStartUp from './SignUp/DetailStartUp'
import DetailInvestor from './SignUp/DetailInvestor'


function App() {
  return (
    <div>
    <Router>
      <Switch>
      <Route path="/" exact component={Homepg}/>
      <Route path="/signup-investor" exact component={Investor}/>
      <Route path="/signup-startup" exact component={StartUp}/>
      <Route path="/login" exact component={Login1}/>
      <Route path="/login/allinvestors" component={AllInvestors}/>
      <Route path="/login/allstartups" component={AllStartups}/>
      <Route path="/allstartups/:id" component={DetailStartUp}/>
      <Route path="/allinvestors/:id" component={DetailInvestor}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
