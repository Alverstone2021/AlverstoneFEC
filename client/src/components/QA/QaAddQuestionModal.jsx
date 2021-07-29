import React from 'react';
import {useState, useEffect} from 'react';


const QaAddQuestionModal = ({setQuestionModal}) => {

  const [questionInput, setQuestionInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')




  return (
    <div className="modal">
      <div className="modal-content">

        <div className="modal-header">
          <button onClick={() => {setQuestionModal(false)}}>X</button>
          <h3 className="modal-title"><strong>Submit a new Question</strong></h3>
        </div>

        <form>
          <div className="modal-body">
            <div>
              <label>Question*</label>
              <input type="text" placeholder="What's your question?" maxLength="1000" name="question" value={questionInput} onChange={(e) => {setQuestionInput(e.target.value)}}/>
              <h5>{questionInput.length} / 1000 characters</h5>
            </div>
            <div>
              <label>Nickname*</label>
              <input type="text" placeholder="Example: jackson11" maxLength="60" value={nicknameInput} onChange={(e) => {setNicknameInput(e.target.value)}}/>
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

export default QaAddQuestionModal;