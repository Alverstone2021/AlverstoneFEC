import React from 'react';
import QaQuestion from './QaQuestion.jsx'

const QaQuestionsList = ({allQuestions}) => {
  // console.log('QaQuestionsList allQuestions', allQuestions)
  return (
    <div>
      {allQuestions.results.map(q => {
        return <QaQuestion question={q} key={q.question_id}/>;
      })}
      <div><strong>Load More Answers</strong></div>
    </div>
  )
}

export default QaQuestionsList;