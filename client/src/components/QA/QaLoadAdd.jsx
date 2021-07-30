import React from 'react';
import QaAddQuestionModal from './QaAddQuestionModal.jsx'
import {useState} from 'react';

const QaLoadAdd = (props) => {


  const [questionModal, setQuestionModal] = useState(false)


  return (
    <div>
      <button onClick={props.qLimitPlusTwo}>MORE ANSWERED QUESTIONS</button>
      <button onClick={() => {setQuestionModal(true)}}>ADD A QUESTION +</button>
      {questionModal && <QaAddQuestionModal setQuestionModal={setQuestionModal} product_id={props.product_id}/>}
    </div>
  )
}

export default QaLoadAdd;