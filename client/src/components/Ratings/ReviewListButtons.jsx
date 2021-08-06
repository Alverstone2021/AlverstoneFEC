import React from 'react';

const ReviewListButtons = (props) => {

  const styleShowing = props.showLoad ? 'modal-div-buttons show' : 'modal-div-buttons hidden';

  return (
    <div className='review-modal-buttons-parent'>
      <div className={styleShowing} onClick={() => { props.setShowAmount(2 + props.showAmount) }}>Load more</div>
      <div className='modal-div-buttons' onClick={() => props.setShowModal(true)}>Add Review +</div>
    </div>
  );
}

export default ReviewListButtons;