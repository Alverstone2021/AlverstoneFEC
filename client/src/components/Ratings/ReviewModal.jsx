import React from 'react';
import { useEffect, useState } from 'react';
import ModalRatingBar from './ModalRatingBar.jsx';

const ReviewModal = (props) => {
  const showHideClassName = props.show ? "review-modal display-grid" : "review-modal display-none";

  // hooks

  return (
    <div className={showHideClassName}>
      {/* <div className='review-modal-grid'> */}
      <div className='review-modal-grid-title'>
        <p>Please rate this product:</p>
      </div>
      <div className='review-modal-layout'>
        <form>
          <span>
            <input type="radio" id="1star" value={1}>
            </input>
            <label>1 Stars</label>
            <input type="radio" id="2star" value={2}>
            </input>
            <label>2 Stars</label>
            <input type="radio" id="3star" value={3}>
            </input>
            <label>3 Stars</label>
            <input type="radio" id="4star" value={4}>
            </input>
            <label>4 Stars</label>
            <input type="radio" id="5star" value={5}>
            </input>
            <label>5 Stars</label>
          </span>
        </form>
        <h4>Do you recommend this product?</h4>
        <div className='modal-recommend-parent'>
          <label>Yes</label>
          <input name='recommend' id='recommend-yes' type="radio" value={true}></input>
          <label>No</label>
          <input name='recommend' id='recommend-no' type="radio" value={false}></input>
        </div>
        <div className='modal-characteristic'>
          <h4 style={{ margin: '8px' }}>Characteristics:</h4>
          {createCharBars(props.metaData.characteristics).map((char, i) => {
            return (
              <ModalRatingBar key={i} title={char.title} label1={char.label1} label2={char.label2} label3={char.label3} label4={char.label4} label5={char.label5} charId={char.id} />
            );
          })}
        </div>
      </div>
      <div className='review-modal-grid-feedback'>
        <p style={{ margin: '4px' }}>Username:</p>
        <input placeholder='Example: jackson11' style={{ height: '25px', width: '200px' }} type='text'></input>
        <p style={{ margin: '4px' }}>Email:</p>
        <input placeholder='Example: jackson11@email.com' style={{ height: '25px', width: '200px' }} type='text'></input>
        <p style={{ margin: '4px' }}>Review title:</p>
        <input placeholder='Example: Best purchase ever!' style={{ height: '25px', width: '200px' }} type='text'></input>
        <textarea placeholder='Why did you like the product or not?' type='text' style={{ height: '100px', width: '200px', }}></textarea>
        <div className='review-modal-uploadImages'>
          <input placeholder='Photo URL' style={{ height: '25px', width: '200px' }} type='text'></input>
        </div>
      </div>
      <div className='review-modal-buttons-parent'>
        <div className='modal-div-buttons' onClick={() => props.handleClose(false)}>Close</div>
        <div className='modal-div-buttons' onClick={() => props.handleClose(false)}>Submit +</div>
      </div>
      {/* </div> */}
    </div>
  );
};

// helper functions
const createCharBars = (charObject) => {
  if (charObject) {
    var charArray = [];
    for (var key in charObject) {
      var barObj = {};
      barObj.title = key;
      barObj.value = parseFloat(charObject[key].value);
      barObj.id = charObject[key];
      switch (key) {
        case 'Size':
          barObj.label1 = 'A size too small';
          barObj.label2 = '1/2 a size too small';
          barObj.label3 = 'Perfect';
          barObj.label4 = '1/2 a size too big';
          barObj.lebel5 = 'A size too wide';
          break;
        case 'Width':
          barObj.label1 = 'Too narrow';
          barObj.label2 = 'Slightly narrow';
          barObj.label3 = 'Perfect';
          barObj.label4 = 'Slightly wide';
          barObj.label5 = 'Too wide';
          break;
        case 'Comfort':
          barObj.label1 = 'Uncomfortable';
          barObj.label2 = 'Slightly uncomfortable';
          barObj.label3 = 'Ok';
          barObj.label4 = 'Comfortable';
          barObj.label5 = 'Perfect';
          break;
        case 'Quality':
          barObj.label1 = 'Poor';
          barObj.label2 = 'Below average';
          barObj.label3 = 'Fair';
          barObj.label4 = 'Pretty great';
          barObj.label5 = 'Perfect';
          break;
        case 'Length':
          barObj.label1 = 'Runs short';
          barObj.label2 = 'Runs slightly short';
          barObj.label3 = 'Perfect';
          barObj.label4 = 'Runs slightly long';
          barObj.label5 = 'Runs long';
          break;
        case 'Fit':
          barObj.label1 = 'Runs tight';
          barObj.label2 = 'Runs slightly tight';
          barObj.label3 = 'Perfect';
          barObj.label4 = 'Runs slightly long';
          barObj.label5 = 'Runs long';
          break;
        default:
          break;
      }
      charArray.push(barObj);
    }
    return charArray;
  } else {
    return [];
  }
}

export default ReviewModal;