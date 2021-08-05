import React from 'react';
import {useState, useEffect} from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import QaPhotoInput from './QaPhotoInput.jsx'

const QaAddAnswerModal = ({setAnswerModal, question, question_id, currentProduct}) => {
  const [answerInput, setAnswerInput] = useState('')
  const [nicknameInput, setNicknameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [photoInput, setPhotoInput] = useState([])

  const [numOfPhotos, setNumOfPhotos] = useState([0])
  const [showMinus, setShowMinus] = useState(false)
  const [showPlus, setShowPlus] = useState(true)

  const createNewAnswer = (e) => {

    // console.log('photoInput on submit', photoInput)


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
      "photos": photoInput
    });


    // console.log('SUBMITION DATA', data)

    apiCalls.postNewAnswer(data, question_id)
    .then(function (response) {
      setAnswerModal(false)
    })
    .catch(function (error) {
      console.error(error)
    })
    }
  }

  const addPhoto = () => {
    event.preventDefault()
    var temp = Object.create(numOfPhotos)
    temp = [...temp, numOfPhotos.length]
    setNumOfPhotos(temp)

    if (temp.length >= 1 && temp.length <= 4) {
      // console.log('add is between 1 and 4')
      setShowMinus(true)
      setShowPlus(true)
    } else if (temp.length >= 5) {
      // console.log('add is maxed')
      setShowPlus(false)
    } else {
      // console.log('add else')
      setShowMinus(false)
      setShowPlus(true)
    }
  }

  const removePhoto = () => {

    var urls = Object.create(photoInput)
    var urls2 = []
    for (var i = 0; i < urls.length - 1; i++) {
      urls2.push(urls[i])
    }
    setPhotoInput(urls2)


    event.preventDefault()
    var temp = Object.create(numOfPhotos)
    temp.pop()
    setNumOfPhotos(temp)

    if (temp.length === 1) {
      setShowMinus(false)
    } else if (temp.length >= 1 && temp.length <= 4) {
      // console.log('minus between 1 and 4')
      setShowMinus(true)
      setShowPlus(true)
    } else if (temp.length >= 5) {
      // console.log('minus at 5')
      setShowPlus(false)
    } else {
      // console.log('minus else')
      setShowMinus(false)
      setShowPlus(true)
    }
  }

  const compilePhotos = (e) => {
    var index = Number(e.target.title)
    var temp = photoInput;
    temp[index] = e.target.value
    setPhotoInput(temp)
  }


  return (
    <div className="modal-qa">
      <div className="modal-content">

        <div className="modal-header">
          <button onClick={() => {setAnswerModal(false)}}>X</button>
          <h3 className="modal-title"><strong>Submit your Answer</strong></h3>
          <h4>{currentProduct}: {question}</h4>
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
                {numOfPhotos.map((e, i) => {
                  // console.log('mapping i', e, i);
                  return <QaPhotoInput key={i} index={i} compilePhotos={compilePhotos}/>
                  // return <input type="text" placeholder="Photo URL" value={photoInput} onChange={(e) => {setPhotoInput(e.target.value)}} key={i}/>
                })}

              <h5>add some photo urls if you want</h5>
              {showPlus ? <button onClick={addPhoto}>+</button> : <button onClick={addPhoto} disabled>+</button>}
              {showMinus ? <button onClick={removePhoto}>-</button> : <button onClick={removePhoto} disabled>-</button>}

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