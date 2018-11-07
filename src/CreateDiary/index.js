import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';


class CreateDiary extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      date: '',
      image: '',
      text: ''
    }
  }

handleChange = (e) => {
  this.setState({[e.currentTarget.name]: e.currentTarget.value})
}

render(){
  return(
      <Segment>
      <h1>Everyday Diary</h1>

      <Form onSubmit={this.props.addDiary.bind(null, this.state)}>

          <Form.Input
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Title'
            />

        <br/>

          <Form.Input
            type='text'
            name='author'
            value={this.state.author}
            onChange={this.handleChange}
            placeholder='Author'
            />

        <br/>

          <Form.Input
            type='text'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            placeholder='Todays date:'
            />

        <br/>

          <Form.Input
            type='text'
            name='image'
            value={this.state.image}
            onChange={this.handleChange}
            placeholder='Image:'/>

        <br/>

          <Form.TextArea
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
            placeholder='Write your thoughts...'/>

        <br/>

          <Button type='Submit' color='black'>Create Post</Button>
      </Form>
    </Segment>
    )
  }
}


export default CreateDiary;
