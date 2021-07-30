import React from 'react';
import {useState, useEffect} from 'react';


const QaAddAnswerModal = ({setAnswerModal, question}) => {
  const [answerInput, setAnswerInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')


  return (
    <div className="modal-qa">
      <div className="modal-content">

        <div className="modal-header">
          <button onClick={() => {setAnswerModal(false)}}>X</button>
          <h3 className="modal-title"><strong>Submit your Answer</strong></h3>
          <h4>Product Name: {question}</h4>
        </div>

        <form>
          <div className="modal-body">
            <div>
              <label>Answer*</label>
              <input type="text" placeholder="What's your Answer?" maxLength="1000" value={answerInput} onChange={(e) => {setAnswerInput(e.target.value)}}/>
              <h5>{answerInput.length} / 1000 characters</h5>
            </div>
            <div>
              <label>Nickname*</label>
              <input type="text" placeholder="Example: jack543" maxLength="60" value={nicknameInput} onChange={(e) => {setNicknameInput(e.target.value)}}/>
              <h5>For privacy reasons, do not use your full name or email address</h5>
              <h5>{nicknameInput.length} / 60 characters</h5>
              <label>Email*</label>
              <input type="text" placeholder="Example: jack@email.com"/>
              <h5>For authentication reasons, you will not be emailed</h5>
            </div>
          </div>
        </form>

        <div className="modal-footer">
          <button className="button">Submit</button>
        </div>

      </div>
    </div>
  )
}

export default QaAddAnswerModal;