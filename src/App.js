import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import './App.css';
import { Link } from 'react-router-dom';
import { Header, Image, Segment, Container, Icon, Divider } from 'semantic-ui-react';

import Login from './Login';
import DiaryContainer from './DiaryContainer';
import ShowList from './ShowList';


const App = () => {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Vidaloka');
      </style>

      <div className='mediaIcons'>
      <a href="http://github.com" target="_blank"><Icon link name='github' size='large' style={{ padding: '1em 1em', color: 'black' }}/></a>
      <a href="http://behance.com" target="_blank"><Icon link name='behance square' size='large' style={{ padding: '1em 1em', color: 'black' }}/></a>
      <a href="http://medium.com" target="_blank"><Icon link name='medium' size='large' style={{ padding: '1em 1em', color: 'black' }}/></a>
      <a href="http://twitter.com" target="_blank"><Icon link name='twitter' size='large' style={{ padding: '1em 1em', color: 'black' }}/></a>
      </div>

      <div className='logo'>
        <Image src={require('./img/logo.png')} size='medium' />
      </div>

      <Header className='nav' textAlign='center'>
        <Link to ="/"> Logout </Link>
        <Link to ="/diary"> Create New </Link>
        <Link to ="/all"> See All Posts </Link>
      </Header>
      <Divider ClassName='divider'/>

      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/diary" component={DiaryContainer}/>
        <Route exact path="/all" component={ShowList}/>
      </Switch>

    </div>
  );
}


export default App;
