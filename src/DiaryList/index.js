import React from 'react';

const Diary = (diary, deleteDiary) => {
  const diarylist = diary.length ? (
    diary.map(diary => {
      return(
        <div key={diary.id}>
          <li>
            {diary.title}<br/>
            {diary.image}<br/>
            {diary.author}<br/>
            {diary.date}<br/>
            {diary.text}<br/>
          <button onSubmit={ () => {deleteDiary(diary.id)}}>
              Delete diary
            </button>
          </li>
        </div>
      )
    })
  ) : (
    <p>No comments left</p>
  )

  return(
    <div>
      <h1>Diary Comments</h1>
      {diarylist}
    </div>
  )
}


export default Diary;
