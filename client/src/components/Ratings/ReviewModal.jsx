import React from 'react';
import ModalRatingBar from './ModalRatingBar.jsx';

const ReviewModal = (props) => {
  const showHideClassName = props.show ? "review-modal display-block" : "review-modal display-none";
  return (
    <div className={showHideClassName}>
      <div className='review-modal-layout'>
        <form>
          <p>Please rate this product:</p>
          <span>
            <input type="radio" id="1star" value={1}>
            </input>
            <label for="1star">1 Stars</label>
            <input type="radio" id="2star" value={2}>
            </input>
            <label for="2star">2 Stars</label>
            <input type="radio" id="3star" value={3}>
            </input>
            <label for="3star">3 Stars</label>
            <input type="radio" id="4star" value={4}>
            </input>
            <label for="4star">4 Stars</label>
            <input type="radio" id="5star" value={5}>
            </input>
            <label for="5star">5 Stars</label>
          </span>
        </form>
        <div className='modal-recommend-parent'>
          <label for='recommend-yes'>Yes</label>
          <input id='recommend-yes' type="radio" value={true}></input>
          <label for='recommend-no'>No</label>
          <input id='recommend-no' type="radio" value={false}></input>
        </div>
        <div className='modal-characteristic'>
          <h4>Characteristics:</h4>
          {createCharBars(props.metaData.characteristics).map((char, i) => {
            return (
              <ModalRatingBar key={i} title={char.title} label1={char.label1} label2={char.label2} label3={char.label3} label4={char.label4} label5={char.label5} />
            );
          })}
        </div>
        <input placeholder='Example: jackson11' style={{ height: '25px', width: '25%' }} type='text'></input>
        <textarea placeholder='Example: Best purchase ever!' type='text' style={{ height: '100px', width: '35%', }}></textarea>
      </div>
      <button onClick={() => props.handleClose(false)}>Close</button>
      <button onClick={() => props.handleClose(false)}>Submit review</button>
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