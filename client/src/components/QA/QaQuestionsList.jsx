import React from 'react';
import QaQuestion from './QaQuestion.jsx'

const QaQuestionsList = (props) => {
  return (
    <div>
      <QaQuestion />
      <div><strong>Load More Answers</strong></div>
    </div>
  )
}

export default QaQuestionsList;