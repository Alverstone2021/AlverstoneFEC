import React from 'react';
import QaQuestion from './QaQuestion.jsx'
import { useEffect, useState } from 'react'

const QaQuestionsList = ({questions, currentProduct}) => {

  questions = questions.sort((a, b) => {
    return b.question_helpfulness - a.question_helpfulness
  })

  return (
    <div className="questionsList">
      {questions.map(q => {
        return <QaQuestion question={q} key={q.question_id} currentProduct={currentProduct}/>;
      })}
    </div>
  )
}

export default QaQuestionsList;