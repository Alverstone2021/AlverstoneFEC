import React from 'react';

const ReviewModal = (props) => {
  const showHideClassName = props.show ? "review-modal display-block" : "review-modal display-none";
  return (
    <div className={showHideClassName}>
      <button onClick={() => props.handleClose(false)}>Close</button>
    </div>
  );
};

export default ReviewModal;