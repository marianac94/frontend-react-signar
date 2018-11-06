import React, { Component } from 'react';

class CreateDiary extends Component {
    state = {
        title: '',
        author: '',
        date: '',
        image: '',
        text: ''
    }

  handleChange = (e) => {
    this.setState({
      // title: e.target.value,
      // author: e.target.value,
      // date: e.target.value,
      // image: e.target.value,
      // text: e.target.value
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDiary(this.state)
      this.setState({
        title: '',
        author: '',
        date: '',
        image: '',
        text: ''
      })
  }

  render(){
    return(
      <div>
      <h1>Everyday Diary</h1>

      <form onSubmit={this.handleSubmit}>

          <input type='text' id='title' value={this.state.title} onChange={this.handleChange} placeholder='Title'/>

        <br/>

          <input type='text' id='author' value={this.state.author} onChange={this.handleChange} placeholder='Author'/>

        <br/>

          <input type='text' id='date' value={this.state.date} onChange={this.handleChange} placeholder='Todays date:'/>

        <br/>

          <input type='text' id='image' value={this.state.image} onChange={this.handleChange} placeholder='Image:'/>

        <br/>

          <input type='text' id='text' value={this.state.text} onChange={this.handleChange} placeholder='Write some thoughts:'/>

        <br/>

          <button>Create Post</button>
      </form>
    </div>
    )
  }
}


export default CreateDiary;
