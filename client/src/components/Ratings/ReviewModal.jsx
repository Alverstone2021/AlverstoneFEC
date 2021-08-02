import React from 'react';

const ReviewModal = (props) => {
  const showHideClassName = props.show ? "review-modal display-block" : "review-modal display-none";
  return (
    <div className={showHideClassName}>
      <div className='review-modal-layout'>
        <form>
          <p>Please rate this product:</p>
          <span>
            <input type="radio" id="1star" name="fav_language" value="0">
            </input>
            <label for="1star">1 Stars</label>
            <input type="radio" id="2star" name="fav_language" value="CSS">
            </input>
            <label for="2star">2 Stars</label>
            <input type="radio" id="3star" name="fav_language" value="JavaScript">
            </input>
            <label for="3star">3 Stars</label>
            <input type="radio" id="4star" name="fav_language" value="JavaScript">
            </input>
            <label for="4star">4 Stars</label>
            <input type="radio" id="5star" name="fav_language" value="JavaScript">
            </input>
            <label for="5star">5 Stars</label>
          </span>
        </form>
        <input placeholder='Username' style={{ height: '25px', width: '25%' }} type='text'></input>
        <textarea placeholder='Body text' type='text' style={{ height: '100px', width: '35%', }}></textarea>
      </div>
      <button onClick={() => props.handleClose(false)}>Close</button>
      <button onClick={() => props.handleClose(false)}>Submit review</button>
    </div>
  );
};

export default ReviewModal;