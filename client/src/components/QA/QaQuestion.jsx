import React from 'react';
import QaAnswersList from './QaAnswersList.jsx';
import moment from 'moment';
import { useEffect, useState } from 'react'
import QaAddAnswerModal from './QaAddAnswerModal.jsx'
import apiCalls from '../../../../helpers/shoppingApi.js';

const QaQuestion = ({question, currentProduct}) => {


  question.answers = Object.values(question.answers).sort((a, b) => {
    return b.helpfulness - a.helpfulness
  })

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
  const [helpfulnessRating, setHelpfulnessRating] = useState(question.question_helpfulness)
  const [reported, setReported] = useState(false)

  if (totalNumOfAnswers > 2 && moreAnswers === false && totalNumOfAnswers > numOfAnswersShowing) {
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

    if (numOfAnswersShowing + 2 >= totalNumOfAnswers) {
      setMoreAnswers(false)
    }
  }

  const answerLimitPlusTwo = () => {
    // console.log('updating answer limit')
    setAnswerLimit(answerLimit + 2)
    setNumOfAnswersShowing(numOfAnswersShowing + 2)
    updateAnswers()
  }

  const [answerModal, setAnswerModal] = useState(false)


  const clickHelpfulness = () => {
    apiCalls.questionHelpful(question.question_id)
    .then(() => {
      setHelpfulnessRating(helpfulnessRating + 1)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const clickReport = () => {
    apiCalls.questionReport(question.question_id)
    .then(() => {
      setReported(true)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (

    <div className="question qa-container">

      {/*Question block*/}
      <div className="question-Block">
        <div className="question-Text">Q:  {question.question_body}</div>
        <div className="question-Info">
          <div className="question-Username QI">by {question.asker_name}, </div>
          {/* <div className="QI">|</div> */}
          <div className="question-Date QI">{moment(question.question_date).format('MMMM Do YYYY')}</div>
          <div className="QI">|</div>
          <div className="question-Helpful QI" onClick={clickHelpfulness}>Helpful? <u>Yes</u> ({helpfulnessRating})</div>
          <div className="QI">|</div>
          <div className="question-AddAnswer QI addAnswerBtn" onClick={() => {setAnswerModal(true)}}>Add Answer</div>
          <div className="QI">|</div>
          <div className="question-Report QI" onClick={clickReport}><u>{reported ? 'Reported' : 'Report'}</u></div>
        </div>
      </div>

      {/*Answer block*/}
      <div className="answerBlock">
        <QaAnswersList answers={question.answers} answerLimit={answerLimit} limitedAnswers={answers}/>
      </div>

      {/*Load More block*/}
      {/* {moreAnswers && <button onClick={answerLimitPlusTwo}><strong>Load More Answers</strong></button>} */}
      {moreAnswers && <div onClick={answerLimitPlusTwo} className="loadAnswers">LOAD MORE ANSWERS</div>}
      {answerModal && <QaAddAnswerModal setAnswerModal={setAnswerModal} question_id={question.question_id}  question={question.question_body} currentProduct={currentProduct}/>}

    </div>



  )
}

export default QaQuestion;