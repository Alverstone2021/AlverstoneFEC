import React from 'react';
import QaQuestion from './QaQuestion.jsx'
import { useEffect, useState } from 'react'

const QaQuestionsList = ({allQuestions, qLimit, questions}) => {
  return (
    <div className="questionsList">
      {questions.map(q => {
        return <QaQuestion question={q} key={q.question_id}/>;
      })}
    </div>
  )
}

export default QaQuestionsList;