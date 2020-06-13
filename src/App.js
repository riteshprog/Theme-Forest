import React, { Component } from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import Routes from './Routes';
import Summary from './components/Summary'

import Analytics from './components/Analytics';
import Vizual from './components/Vizual';
import Comparative from './components/Comparative';
import Recommendation from './components/Recommendation';


class App extends Component {
render(){
    return (
     <div className="container">
      <Router>
      <NavBar />
      <div className="Route-page">
      <Switch>
        <Route exact path='/' component={Summary} />
        <Route exact path='/analytics' component={Analytics} />
        <Route exact path='/vizual' component={Vizual} />
        <Route exact path='/comparative' component={Comparative} />
        <Route exact path='/recommendation' component={Recommendation} />
      </Switch>
      </div>
      </Router> 

      </div>
    );
  }
}

export default App;
