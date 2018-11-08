import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { Link } from 'react-router-dom';
import { Header, Image, Segment, Container, Icon } from 'semantic-ui-react';

import Login from './Login';
import DiaryContainer from './DiaryContainer';


const App = () => {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Vidaloka');
      </style>

      <div className='mediaIcons'>
        <Icon link name='github' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='behance square' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='medium' size='large' style={{ padding: '1em 1em' }}/>
        <Icon link name='twitter' size='large' style={{ padding: '1em 1em' }}/>
      </div>

      <div className='logo'>
        <Image src={require('./img/logo.png')} size='medium' />
      </div>

      <Header className='nav' textAlign='center' vertical>
        <Link to ="/"> Logout </Link>
        <Link to ="/diary"> Create New </Link>
        <Link to ="/all"> See All Posts </Link>
      </Header>

      <Container className='introText' textAlign='center' style={{ padding: '6em 0em' }} vertical>
        <h1 className='mainText'>Welcome to your journal.</h1>
        <h3 className='pText'>a new digital space to write about your day by day</h3>
      </Container>

      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/diary" component={DiaryContainer}/>
      </Switch>

      <footer>
        © all rights reserved
      </footer>

    </div>
  );
}


export default App;
