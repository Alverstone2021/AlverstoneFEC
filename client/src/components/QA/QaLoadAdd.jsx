import React from 'react';
import QaAddQuestionModal from './QaAddQuestionModal.jsx'
import {useState} from 'react';

const QaLoadAdd = (props) => {
  // console.log('load props', props)

  const [questionModal, setQuestionModal] = useState(false)


  return (
    <div>
      <button onClick={props.qLimitPlusTwo}>MORE ANSWERED QUESTIONS</button>
      <button onClick={() => {setQuestionModal(true)}}>ADD A QUESTION +</button>
      {questionModal && <QaAddQuestionModal setQuestionModal={setQuestionModal}/>}
    </div>
  )
}

export default QaLoadAdd;