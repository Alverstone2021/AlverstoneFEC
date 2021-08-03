import React from 'react';
import QaSearchBar from './QaSearchBar.jsx'
import QaQuestionsList from './QaQuestionsList.jsx'
import QaLoadAdd from './QaLoadAdd.jsx'
import { useEffect, useState } from 'react'
import axios from 'axios'

const QaIndex = ({allQuestions}) => {

  var temparr = [];
  for (var i = 0; i < 4; i++) {
      if (allQuestions.results[i] !== undefined) {
        temparr.push(allQuestions.results[i])
      }
  }

  const [qLimit, setQLimit] = useState(4)
  const [questions, setQuestions] = useState(temparr)

  const updateQuestions = () => {
    var temp = [];
    for (var i = 0; i < qLimit + 2; i++) {
        if (allQuestions.results[i] !== undefined) {
          temp.push(allQuestions.results[i])
        }
    }
    setQuestions(temp)
  }

  const qLimitPlusTwo = () => {
      setQLimit(qLimit + 2)
      updateQuestions()
  }

  const updateSearch = (e) => {

    if (e.length >= 3) {
      setQuestions(allQuestions.results.filter(answer => answer.question_body.toLowerCase().includes(e.toLowerCase())))
    } else if (e.length <3) {
      setQuestions(temparr)
    }
  }


  return (
    <div>
      <h3>QUESTIONS & ANSWERS</h3>
      <QaSearchBar updateSearch={updateSearch}/>
      <QaQuestionsList questions={questions}/>
      <QaLoadAdd qLimitPlusTwo={qLimitPlusTwo} product_id={allQuestions.product_id}/>
    </div>
  )
}

export default QaIndex;