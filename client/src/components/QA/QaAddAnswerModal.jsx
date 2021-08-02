import React from 'react';
import {useState, useEffect} from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';



const QaAddAnswerModal = ({setAnswerModal, question, question_id}) => {
  const [answerInput, setAnswerInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [photoInput, setPhotoInput] = useState('')

  console.log('question', question_id)


  const createNewAnswer = (e) => {

    if (answerInput.length === 0) {
      alert('Please type in your answer before submitting')
    } else if (nicknameInput.length === 0) {
      alert('Please type in your nickname before submitting')
    } else if (emailInput.length === 0) {
      alert('Please type in your email before submitting')
    } else if (emailInput.indexOf('@') === -1 || emailInput.indexOf('.') === -1) {
      alert('Please ensure your email is formatted correctly and includes "." and "@".')
    } else {

    var data = JSON.stringify({
      "body": answerInput,
      "name": nicknameInput,
      "email": emailInput,
      "photos": []
    });

    apiCalls.postNewAnswer(data, question_id)
    .then(function (response) {
      setAnswerModal(false)
    })
    .catch(function (error) {
      console.error(error)
    })
    }
  }


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
              <input type="text" placeholder="Example: jack@email.com" value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}}/>
              <h5>For authentication reasons, you will not be emailed</h5>

              <label>Photo(s) URL</label>
              <input type="text" placeholder="Photo URL" value={photoInput} onChange={(e) => {setPhotoInput(e.target.value)}}/>
              <h5>add some photo urls if you want</h5>
            </div>
          </div>
        </form>

        <div className="modal-footer">
          <button className="button" onClick={createNewAnswer}>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default QaAddAnswerModal;