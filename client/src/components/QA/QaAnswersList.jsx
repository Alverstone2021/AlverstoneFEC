import React from 'react';
import QaAnswer from './QaAnswer.jsx'

const QaAnswersList = ({limitedAnswers}) => {
  return (
    <React.Fragment>
      {limitedAnswers.map(a => {
        return <QaAnswer answer={a} key={a.id} />;
      })}
    </React.Fragment>
  )
}

export default QaAnswersList;