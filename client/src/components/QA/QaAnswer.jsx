import React from 'react';
import moment from 'moment';


const QaAnswers = ({answer}) => {
  // console.log(answer)
  return (
    <div class='answer'>
      <h3>A: {answer.body}</h3>
      <img src={answer.photos[0]} class="QaImage"></img>
      <h4>by {answer.answerer_name}, {moment(answer.date).format('MMMM Do YYYY')}  |  Helpful? Yes({answer.helpfulness})  |  Report</h4>

    </div>
  )
}

export default QaAnswers;