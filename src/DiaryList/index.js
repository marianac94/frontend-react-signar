import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Header, Card, Button, Image, Icon, Content, Grid } from 'semantic-ui-react';
import '../App.css';


const DiaryList = (props) => {
  console.log(props, ' this is props');
  const diaryList = props.oneDiary.map((oneDiary) => {

    return (
        <Card key={oneDiary._id}>
           <Image src={oneDiary.image} />

        <Card.Content>
          <Card.Header>{oneDiary.title}</Card.Header>

        <Card.Meta>
          <span className='dateAndAuthor'>Created in {oneDiary.date} <br/> by: {oneDiary.author}</span>
        </Card.Meta>

        <Card.Description>{oneDiary.text}</Card.Description>
        </Card.Content>

        <Card.Content extra>
          <a>
           <Button.Content onClick={props.deleteDiary.bind(null, oneDiary._id)} hidden>
              <Icon name='delete' />
                Delete Post
           </Button.Content>
          </a>
        </Card.Content>
      </Card>

    )
})
    return(
      <div>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Vidaloka');
        </style>

        <h1 className='titleList'>My journal</h1>
        <h3 className='subTitleList'>List of my articles</h3>
        <Card.Group className="centered">
          {diaryList}
        </Card.Group>
      </div>
    )
  }


export default DiaryList;
