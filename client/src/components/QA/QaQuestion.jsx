import React from 'react';
import QaAnswersList from './QaAnswersList.jsx';
import moment from 'moment';
import { useEffect, useState } from 'react'
import QaAddAnswerModal from './QaAddAnswerModal.jsx'

const QaQuestion = ({question}) => {

  // console.log('qaquestion', question.question_id)

var temparr = [];
  for (var i = 0; i < 2; i++) {
    if (Object.values(question.answers)[i] !== undefined) {
      temparr.push(Object.values(question.answers)[i])
    }
  }

  const [answerLimit, setAnswerLimit] = useState(2)
  const [answers, setAnswers] = useState(temparr)
  const [numOfAnswersShowing, setNumOfAnswersShowing] = useState(answers.length)
  const [totalNumOfAnswers, setTotalNumOfAnswers] = useState(Object.values(question.answers).length)
  const [moreAnswers, setMoreAnswers] = useState(false)

  if (totalNumOfAnswers > 2 && moreAnswers === false && totalNumOfAnswers > numOfAnswersShowing) {
    // console.log('button should show')
    setMoreAnswers(true)
  }

  const updateAnswers = () => {
    var temp = [];
    for (var i = 0; i < answerLimit + 2; i++) {
      if (Object.values(question.answers)[i] !== undefined) {
        temp.push(Object.values(question.answers)[i])
      }
    }
    setAnswers(temp)
    console.log('totalNumOfAnswers', totalNumOfAnswers)
    console.log('before numOfAnswersShowing', numOfAnswersShowing + 2)

    if (numOfAnswersShowing + 2 >= totalNumOfAnswers) {
      console.log('inside here')
      setMoreAnswers(false)
      console.log('status', moreAnswers)
    }



  }

  const answerLimitPlusTwo = () => {
    // console.log('updating answer limit')
    setAnswerLimit(answerLimit + 2)
    setNumOfAnswersShowing(numOfAnswersShowing + 2)
    updateAnswers()
  }

  const [answerModal, setAnswerModal] = useState(false)

  return (
    <div className='question'>

      <div>
        <div>
          <h3><strong>Q: {question.question_body}</strong></h3>
          <div>
            <h4>{question.asker_name}, {moment(question.question_date).format('MMMM Do YYYY')} | Helpful? Yes({question.question_helpfulness}) | <span className="addAnswerBtn" onClick={() => {setAnswerModal(true)}}>Add Answer</span> | Report</h4>
          </div>
        </div>
       <QaAnswersList answers={question.answers} answerLimit={answerLimit} limitedAnswers={answers}/>
       {moreAnswers && <button onClick={answerLimitPlusTwo}><strong>Load More Answers</strong></button>}
       {answerModal && <QaAddAnswerModal setAnswerModal={setAnswerModal} question_id={question.question_id}  question={question.question_body}/>}
      </div>

    </div>
  )
}

export default QaQuestion;