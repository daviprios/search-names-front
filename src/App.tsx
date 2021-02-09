import React from 'react';

import './App.sass';

import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Form from 'pages/Form';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/form' component={Form}/>
          <Route path='/notfound' component={NotFound}/>
          <Route path='*'>
            <Redirect to='/notfound'/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
