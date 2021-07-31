import React from 'react';

const ComfortSizeBar = (props) => {
  return (

    <div className='flex-comfortBar-parent'>
      <h4>{props.title}</h4>
      <div className='flex-comfort-score'>
        <div />
        <div />
        <div />
        <h5>{props.label1}</h5>
        <h5>{props.label2}</h5>
        <h5>{props.label3}</h5>
      </div>
    </div>

  );
};

export default ComfortSizeBar;