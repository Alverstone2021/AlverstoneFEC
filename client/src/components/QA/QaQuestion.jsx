import React from 'react';
import QaAnswersList from './QaAnswersList.jsx'

const QaQuestion = ({question}) => {
  console.log(question)
  return (
    <div>

      <div>
        <div>
          <h3><strong>Q: {question.question_body}</strong></h3>
          <div>Helpful? Yes({question.question_helpfulness})</div>
          <div>Add Answer</div>
        </div>
       <QaAnswersList answers={question.answers}/>
      </div>

    </div>
  )
}

export default QaQuestion;