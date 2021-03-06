import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Divider, Image, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import CreateDiary from '../CreateDiary';


class DiaryContainer extends Component {
  constructor() {
    super();
    this.state = {
      diary: []
    }
  }

  getDiary = async () => {
    const diary = await fetch('http://localhost:9000/api/v1/diary');
      const diaryParsedJSON = await diary.json();
      return diaryParsedJSON
  }

  componentDidMount() {
    this.getDiary().then((diary) => {
      this.setState({diary: diary.data})
    }).catch((err) => {
      console.log(err);
    })
  }

  addDiary = async (oneDiary, e) => {
    e.preventDefault();
      console.log(oneDiary, ' all data is here');
    try {
      const createdDiary = await fetch('http://localhost:9000/api/v1/diary', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(oneDiary),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      } catch(err){
        console.log(err);
      }
    }

  deleteDiary = async (id) => {
    const deleteDiaryResponse = await fetch('http://localhost:9000/api/v1/diary/' + id, {method: 'DELETE'});
    const deleteDiaryParsed = await deleteDiaryResponse.json();
      this.setState({
        diary: this.state.diary.filter((oneDiary) => oneDiary._id !== id )
      })

    console.log(deleteDiaryParsed, ' deleted post')
  }

  render(){
    return(
      <div>
        <Container className='introText' textAlign='center' style={{ padding: '6em 0em' }} vertical>
          <h1 className='mainText'>My life in words.</h1>
          <h3 className='pText'>a new digital space to write about your day by day</h3>
        </Container>

        <CreateDiary addDiary={this.addDiary} />

      </div>
    )
  }
}


export default DiaryContainer;
