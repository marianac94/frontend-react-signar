import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Card, Button, Image, Icon, Content } from 'semantic-ui-react';


const DiaryList = (props) => {
  console.log(props, ' this is props');
  const diaryList = props.oneDiary.map((oneDiary) => {


    return (
        <Card key={oneDiary._id}>
           <Image src={oneDiary.image} />

        <Card.Content>
          <Card.Header>{oneDiary.title}</Card.Header>

        <Card.Meta>
          <span className='dateAndAuthor'>Created in {oneDiary.date} by: {oneDiary.author}</span>
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
        <Card.Group className="centered">
          {diaryList}
        </Card.Group>
      </div>
    )
  }


export default DiaryList;
