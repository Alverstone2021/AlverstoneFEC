import React from 'react';
import QaAnswer from './QaAnswer.jsx'


const QaAnswersList = ({answers}) => {
  // console.log('answers', answers)
  // console.log('answers', answers.1185718)
  // console.log('answers', answers[1185718])
  return (
    <div>
      <QaAnswer answer={answers[1185718]}/>
    </div>
  )
}

export default QaAnswersList;