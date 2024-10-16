import Home from './component/home/Home';
import React from 'react'
// import Navbar from './component/nav/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './component/Auth.js/Auth';

 function App() {
  return (

  <>
  <BrowserRouter>

  <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/Auth" exact component={Home} />
        
      </Switch>
  </BrowserRouter>
  </>
  )
}


export default App;