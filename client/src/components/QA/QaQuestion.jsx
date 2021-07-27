import React from 'react';
import QaAnswersList from './QaAnswersList.jsx';
import moment from 'moment';

const QaQuestion = ({question}) => {
  // console.log('QaQuestion', question)
  return (
    <div className='question'>

      <div>
        <div>
          <h3><strong>Q: {question.question_body}</strong></h3>
          <div>
            <h4>{question.asker_name}, {moment(question.question_date).format('MMMM Do YYYY')} | Helpful? Yes({question.question_helpfulness}) | Add Answer | Report</h4>
          </div>
        </div>
       <QaAnswersList answers={question.answers}/>
       <div><strong>Load More Answers</strong></div>
      </div>

    </div>
  )
}

export default QaQuestion;