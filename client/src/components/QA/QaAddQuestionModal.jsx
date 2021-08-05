import React from 'react';
import {useState, useEffect} from 'react';
// import axios from 'axios';
import apiCalls from '../../../../helpers/shoppingApi.js';


const QaAddQuestionModal = ({setQuestionModal, product_id}) => {
  // console.log('load props product_id', typeof Number(product_id))


  const [questionInput, setQuestionInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')

  const createNewQuestion = () => {

    if (questionInput.length < 15) {
      alert('Please write a longer question with a minimum of 15 characters.')
    } else if (nicknameInput.includes('@')) {
      alert('You cannot use an email address as your nickname.')
    } else if(nicknameInput.length < 5) {
      alert('Please write a longer nickname with a minimum of 5 characters.')
    } else if (emailInput.indexOf('@') === -1 || emailInput.indexOf('.') === -1) {
      alert('Please ensure you are entering a correct email address with an "." and a "@".')
    } else if (emailInput.length <= 5) {
      alert('Please enter a email address.')
    } else {
      var data = JSON.stringify({
        "body": questionInput,
        "name": nicknameInput,
        "email": emailInput,
        "product_id": Number(product_id)
      });

      apiCalls.postNewQuestion(data)
      .then(function (response) {
        setQuestionModal(false)
      })
      .catch(function (error) {
        console.error(error);
      });
    }
  }

  return (
    <div className="modal-qa">
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
              <input type="text" placeholder="Example: jack@email.com" value={emailInput} onChange={(e) => {setEmailInput(e.target.value)}}/>
              <h5>For authentication reasons, you will not be emailed</h5>
            </div>
          </div>
        </form>


        <div className="modal-footer">
          <button className="button" onClick={createNewQuestion}>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default QaAddQuestionModal;