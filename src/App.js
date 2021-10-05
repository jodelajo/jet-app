import React from 'react'
import './App.css';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/navBar/NavBar';
import Home from './pages/home/Home';
import Nieuws from './pages/nieuws/Nieuws';
import Over from './pages/over/Over'
import Contact from './pages/contact/Contact'
import Werkwijze from './pages/werkwijze/Werkwijze';
import Coaching from './pages/coaching/Coaching'
import Footer from './components/footer/Footer';
import OnePost from './components/posts/OnePost';


function App() {
  return (
    <div className="app-container">
      <NavBar/>

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/coaching" component={Coaching} />
      <Route exact path="/over" component={Over} />
      <Route exact path="/werkwijze" component={Werkwijze} />
      <Route exact path="/contact" component={Contact} />
      <Route  exact path="/nieuws" component={Nieuws} />
      <Route exact path="/nieuws/:slug" component={OnePost}  />
      {/* <Route exact path="/jet-admin" render={() => (window.location = "https://jetblog.sanity.studio/desk")}  /> */}
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
