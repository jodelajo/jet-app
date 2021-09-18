import React from 'react'
import './App.css';
import { Route, Switch, } from "react-router-dom";

import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Over from './pages/over/Over'
import Contact from './pages/contact/Contact'
import Werkwijze from './pages/werkwijze/Werkwijze';
import Coaching from './pages/coaching/Coaching'

function App() {
  return (
    <div className="app-container">
      <NavBar/>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/coaching" component={Coaching} />
      <Route path="/over" component={Over} />
      <Route path="/werkwijze" component={Werkwijze} />
      <Route path="/contact" component={Contact} />
      </Switch>
     
    </div>
  );
}

export default App;
