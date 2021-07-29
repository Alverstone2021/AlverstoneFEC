import React from 'react';

const QaAddQuestionModal = ({setQuestionModal}) => {
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
              <label for="question">Question</label>
              <input type="text" placeholder="What's your question?" maxlength="1000" name="question"/>
            </div>

            <div>
              <label>Nickname</label>
              <input type="text" placeholder="Example: jackson11" maxlength="60"/>
              <h5>For privacy reasons, do not use your full name or email address</h5>

              <label>Email</label>
              <input type="text" placeholder="Email"/>
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