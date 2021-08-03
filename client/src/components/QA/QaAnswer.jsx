import React from 'react';
import moment from 'moment';
import QaAnswerImage from './QaAnswerImage.jsx';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';


const QaAnswers = ({answer}) => {
  // console.log('single answer', answer)

  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness)
  const [reported, setReported] = useState(false)

  const clickHelpfulness = () => {
    apiCalls.answerHelpful(answer.id)
    .then(() => {
      setAnswerHelpfulness(answerHelpfulness + 1)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  const clickReport = () => {
    apiCalls.answerReport(answer.id)
    .then(() => {
      setReported(true)
    })
    .catch((error) => {
      console.error(error)
    })
  }

  return (
    <div className='answer'>
      <h3>A: {answer.body}</h3>
      {answer.photos.map(i => {
        return <QaAnswerImage image={i} key={i} />;
      })}
      <div>
        <h4>by {answer.answerer_name},</h4>
        <h4>{moment(answer.date).format('MMMM Do YYYY')}  | </h4>
        <div onClick={clickHelpfulness}>Helpful? Yes({answerHelpfulness})</div>
        <div onClick={clickReport}>|  {reported ? 'Reported' : 'Report'} </div>
      </div>
    </div>
  )
}

export default QaAnswers;