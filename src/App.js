import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react'

import Login from './Login';
import DiaryContainer from './DiaryContainer';



const App = () => {
  return (
    <div>
      <Header className='nav'>
        <Link to ="/"> Logout </Link>
        <Link to ="/diary"> Create New </Link>
        <Link to ="/all"> See All Posts </Link>
      </Header>

      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/diary" component={DiaryContainer}/>
      </Switch>

    </div>
  );
}


export default App;
