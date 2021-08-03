import React from 'react';
import QaAnswer from './QaAnswer.jsx'

const QaAnswersList = ({limitedAnswers}) => {
  return (
    <div>
      {limitedAnswers.map(a => {
        return <QaAnswer answer={a} key={a.id} />;
      })}
    </div>
  )
}

export default QaAnswersList;