import React from 'react';
import moment from 'moment';
import QaAnswerImage from './QaAnswerImage.jsx';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';


const QaAnswers = ({answer}) => {
  // console.log('single answer', answer)

  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness)

  const clickHelpfulness = () => {
    apiCalls.answerHelpful(answer.id)
    .then(() => {
      setAnswerHelpfulness(answerHelpfulness + 1)
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
      <h4>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}  | <div onClick={clickHelpfulness}>Helpful? Yes({answerHelpfulness})</div>  |  Report</h4>
    </div>
  )
}

export default QaAnswers;