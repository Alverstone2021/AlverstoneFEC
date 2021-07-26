import React from 'react';
import QaAnswer from './QaAnswer.jsx'


const QaAnswersList = ({answers}) => {
  // console.log('answers', answers)

  return (
    <div>
      {Object.values(answers).map(a => {
        return <QaAnswer answer={a} key={a.id} />;
      })}
    </div>
  )
}

export default QaAnswersList;