import React, { Component } from 'react';
import { Form, Label, Button } from 'semantic-ui-react';
import './style.css';

class Login extends Component {
  constructor(){
    super();

    this.state = {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const loginResponse = await fetch('http://localhost:9000/auth/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const parsedResponse = await loginResponse.json();
      if(parsedResponse.data === 'login successful'){
        console.log('login worked!');
        this.props.history.push('/diary');
    }
  }

  render(){
    return (
      <Form onSubmit={this.handleSubmit} className='allForm'>

        <h1>Login</h1>

        <Form.Input type='text' name="username" placeholder='Username' onChange={this.handleChange} />

        <Form.Input type='password' name="password" placeholder='Password' onChange={this.handleChange} />

        <Button type="Submit" color="black">Login</Button>
      </Form>
    )
  }
}

export default Login;
