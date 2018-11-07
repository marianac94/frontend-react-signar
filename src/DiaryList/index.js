import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';


const DiaryList = (props) => {
  console.log(props, " this is props");
  const diaryList = props.oneDiary.map((oneDiary) => {


    return (
      <li key={oneDiary._id}>

         {oneDiary.title}
         {oneDiary.author}
         {oneDiary.date}
         <img src={oneDiary.image}/>
         {oneDiary.text}

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
