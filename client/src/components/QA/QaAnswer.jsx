import React from 'react';
import moment from 'moment';
import QaAnswerImage from './QaAnswerImage.jsx'

const QaAnswers = ({answer}) => {
  // console.log('single answer', answer)
  return (
    <div className='answer'>
      <h3>A: {answer.body}</h3>

      {answer.photos.map(i => {
        return <QaAnswerImage image={i} key={i} />;
      })}

      {/* <img src={answer.photos[0]} class="QaImage"></img> */}
      <h4>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}  |  Helpful? Yes({answer.helpfulness})  |  Report</h4>

    </div>
  )
}

export default QaAnswers;