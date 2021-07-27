import React from 'react';
import QaQuestion from './QaQuestion.jsx'
import { useEffect, useState } from 'react'

const QaQuestionsList = ({allQuestions, qLimit, questions}) => {
  // console.log('QaQuestionsList allQuestions', allQuestions)
  console.log('qlimit', qLimit)
  console.log('questions', questions)

  return (
    <div>
      {questions.map(q => {
        return <QaQuestion question={q} key={q.question_id}/>;
      })}

    </div>
  )
}

export default QaQuestionsList;