import React, { Component } from 'react';
import { Form, Button, Label, Segment, Checkbox, Input, Radio, Select, TextArea } from 'semantic-ui-react';
import '../App.css';


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
    <Segment className='everythingForm'>
      <h1 className='titleForm'>Tell your story</h1>

      <Form onSubmit={this.props.addDiary.bind(null, this.state)} className='allForm'>

        <div className='formField'>

          <Form.Field
            control={Input}
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleChange}
            placeholder='Title'
            style={{ width: "500px" }}
            />


          <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            type='text'
            name='author'
            value={this.state.author}
            onChange={this.handleChange}
            placeholder='Author'
            style={{ width: "240px" }}
            />

          <Form.Field
            control={Input}
            type='text'
            name='date'
            value={this.state.date}
            onChange={this.handleChange}
            placeholder='Todays date:'
            style={{ width: "240px" }}
            />
        </Form.Group>

          <Form.Field
            control={Input}
            type='text'
            name='image'
            value={this.state.image}
            onChange={this.handleChange}
            placeholder='Image:'
            style={{ width: "500px" }}
            />


          <Form.Field
            control={TextArea}
            type='text'
            name='text'
            value={this.state.text}
            onChange={this.handleChange}
            placeholder='Write your thoughts...'
            style={{ width: "500px" }}
            />

          <Form.Field
            control={Button}
            type='Submit'
            color='black'
            style={{ width: "500px" }}
            >Post</Form.Field>
          </div>
      </Form>
    </Segment>
    )
  }
}


export default CreateDiary;
