import React from 'react';
import QaQuestion from './QaQuestion.jsx'

const QaQuestionsList = ({allQuestions}) => {
  // console.log(allQuestions)
  return (
    <div>
      <QaQuestion question={allQuestions.results[0]} />
      <div><strong>Load More Answers</strong></div>
    </div>
  )
}

export default QaQuestionsList;