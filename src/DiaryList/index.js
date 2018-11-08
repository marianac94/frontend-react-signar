import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Form, Button, Label, Segment } from 'semantic-ui-react';


const DiaryList = (props) => {
  console.log(props, " this is props");
  const diaryList = props.oneDiary.map((oneDiary) => {


    return (
      <li key={oneDiary._id}>

         {oneDiary.title} <br/>
         {oneDiary.author} <br/>
         {oneDiary.date} <br/>
         <img src={oneDiary.image}/>
         {oneDiary.text} <br/><br/>

       <Button color='black' onClick={props.deleteDiary.bind(null, oneDiary._id)}>Delete Post</Button>

         <br/><br/>
      </li>
    )
})
    return(
      <div>
        <h2>My Diary/Blog</h2>
      <ul>
        {diaryList}
      </ul>
      </div>
    )
  }


export default DiaryList;
