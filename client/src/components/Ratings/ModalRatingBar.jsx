import React from 'react';

const ModalRatingBar = (props) => {
  return (
    <div>
      <h4 Style='margin: 2px'>{props.title}:</h4>
      <div className='modal-radios-div'>
        <p>{props.label1}</p>
        <input type="radio" id={props.title + '1'} value={1} name={props.title}></input>
        <input type="radio" value={2} name={props.title}></input>
        <input type="radio" value={3} name={props.title}></input>
        <input type="radio" value={4} name={props.title}></input>
        <input type="radio" value={5} name={props.title}></input>
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