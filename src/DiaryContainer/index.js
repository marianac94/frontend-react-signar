import React, { Component } from 'react';
import CreateDiary from '../CreateDiary';
import DiaryList from '../DiaryList';

class DiaryContainer extends Component {
  state = {
    diary: [
      {title: '', author: '', date: '', image: '', text: ''}
    ]
  }

  getDiaries = async () => {
    const diary = await fetch('http://localhost:9000/api/v1/diary');
      const diaryParsedJSON = await diary.json();
      return diaryParsedJSON
  }

  componentDidMount(){
    this.getDiaries().then((diary) => {
      this.setState({diary: diary.data})

    }).catch((err) => {
      console.log(err);
    })
  }

  addDiary = async (oneDiary, e) => {
    // e.preventDefault();
    try {
      const createdDiary = await fetch('http://localhost:9000/api/v1/diary', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(oneDiary),
        headers: {
          'Content-Type': 'aaplication/json'
        }
      });

      // const parsedResponse = await createdDiary.json();
        const newDiary = [...this.state.diary, oneDiary]
        this.setState({
          diary: newDiary
        })

    } catch(err){
      console.log(err);
    }
  }

  deleteDiary = async (id) => {
    const deleteDiaryResponse = await fetch('http://localhost:9000/api/v1/diary/' + id,
    {method: 'DELETE'});
    // const deleteDiaryParsed = await deleteDiaryResponse.json();
      const deleteFilterDiary = this.state.diary.filter(diary => {
        return diary.id !== id
      })

    this.setState({
      diary: deleteFilterDiary
      // this.state.diary.filter((diary) => diary._id !== id )
    })
  }

  render(){
    console.log(this.state.diary, ' this is it');
    return(
      <div>
        <CreateDiary addDiary={this.addDiary} />
        <DiaryList diary={this.state.diary} deleteDiary={this.deleteDiary} />
      </div>
    )
  }
}


export default DiaryContainer;
