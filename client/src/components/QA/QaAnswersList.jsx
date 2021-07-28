import React from 'react';
import QaAnswer from './QaAnswer.jsx'


const QaAnswersList = ({answers, answerLimit, limitedAnswers}) => {
  // console.log('answerLimit', answerLimit)
  // console.log('limitedAnswers', limitedAnswers)

  return (
    <div>
      {limitedAnswers.map(a => {
        return <QaAnswer answer={a} key={a.id} />;
      })}
    </div>
  )
}

export default QaAnswersList;