import React from 'react';
import { useEffect, useState } from 'react';

const ModalRatingBar = (props) => {

  //object used to craft the post
  var chars = {

  };

  //hook for changing the title
  const [scoreLabel, setScoreLabel] = useState('');

  return (
    <div>
      <h4 style={{ margin: '2px' }}>{props.title}: {'-' + scoreLabel}</h4>
      <div className='modal-radios-div'>
        <p>{props.label1}</p>
        <form onChange={(e) => {
          props.updateCharObj(props.charId, parseInt(e.target.value));
        }}>
          <input onClick={() => { setScoreLabel(props.label1) }} type="radio" id={props.title + '1'} value={1} name={props.title}></input>
          <input onClick={() => { setScoreLabel(props.label2) }} type="radio" value={2} name={props.title}></input>
          <input onClick={() => { setScoreLabel(props.label3) }} type="radio" value={3} name={props.title}></input>
          <input onClick={() => { setScoreLabel(props.label4) }} type="radio" value={4} name={props.title}></input>
          <input onClick={() => { setScoreLabel(props.label5) }} type="radio" value={5} name={props.title}></input>
        </form>
        <p>{props.label5}</p>
      </div>
      <div className='modal-label-div'>
        {/* <p>{props.label1}</p>
        <p>{props.label5}</p> */}
      </div>
      {/* <div className='modal-divider-div' /> */}
    </div>
  );
}


export default ModalRatingBar;