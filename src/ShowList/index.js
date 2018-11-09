import React, {Component} from 'react';
import { Header, Divider, Image, Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import CreateDiary from '../CreateDiary';
import DiaryList from '../DiaryList';

class ShowList extends Component {
  constructor(){
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

  render() {
  return (
    <div>
      <DiaryList oneDiary={this.state.diary} deleteDiary={this.deleteDiary} />
    </div>
    )
  }
}

export default ShowList;
