import React from 'react';

const ComfortSizeBar = (props) => {
  return (
    <div className='flex-comfortBar-parent'>
      <h4>Size</h4>
      <div className='flex-comfort-score'>
        <div />
        <div />
        <div />
        <h5>Too small</h5>
        <h5>Perfect</h5>
        <h5>Too large</h5>
      </div>
    </div>
  );
};

export default ComfortSizeBar;