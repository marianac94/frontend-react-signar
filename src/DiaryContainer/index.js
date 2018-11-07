import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import styles from './style.css'

import CreateDiary from '../CreateDiary';
import DiaryList from '../DiaryList';


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

  render(){
    console.log(this.state, ' this is it')
    return(
      <div>
        <h1> Signar Logo </h1>
          <CreateDiary addDiary={this.addDiary} />
          <DiaryList oneDiary={this.state.diary} />
      </div>
    )
  }
}


export default DiaryContainer;
// <ListContainer diaryList={this.state.diaryList} />
// <ul>{this.state.diary.map(item => <li>key={item._id}>{item.title}</li>)}</ul>
