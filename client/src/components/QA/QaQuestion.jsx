import React from 'react';
import QaAnswersList from './QaAnswersList.jsx';
import moment from 'moment';
import { useEffect, useState } from 'react'


const QaQuestion = ({question}) => {
  // console.log('QaQuestion question prop', question)

  var temparr = [];
  for (var i = 0; i < 2; i++) {
    // console.log('at i', Object.values(question.answers)[i])

    if (Object.values(question.answers)[i] !== undefined) {
      temparr.push(Object.values(question.answers)[i])
    }
  }
  // console.log('temparr answers', temparr)

  const [answerLimit, setAnswerLimit] = useState(2)
  const [answers, setAnswers] = useState(temparr)

  const updateAnswers = () => {
    var temp = [];
    for (var i = 0; i < answerLimit + 2; i++) {
      if (Object.values(question.answers)[i] !== undefined) {
        temp.push(Object.values(question.answers)[i])
      }
    }
    setAnswers(temp)
  }

  const answerLimitPlusTwo = () => {
    // console.log('updating answer limit')
    setAnswerLimit(answerLimit + 2)
    updateAnswers()
  }

  // console.log('first answer limit', answerLimit)
  return (
    <div className='question'>

      <div>
        <div>
          <h3><strong>Q: {question.question_body}</strong></h3>
          <div>
            <h4>{question.asker_name}, {moment(question.question_date).format('MMMM Do YYYY')} | Helpful? Yes({question.question_helpfulness}) | Add Answer | Report</h4>
          </div>
        </div>
       <QaAnswersList answers={question.answers} answerLimit={answerLimit} limitedAnswers={answers}/>
       <button onClick={answerLimitPlusTwo}><strong>Load More Answers</strong></button>
       {/* <div>Currently showing {answerLimit} Answers</div> */}
      </div>

    </div>
  )
}

export default QaQuestion;