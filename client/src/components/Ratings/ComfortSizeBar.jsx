import React from 'react';

const ComfortSizeBar = (props) => {
  return (

    <div className='flex-comfortBar-parent'>
      <h4>{props.title}</h4>
      <div className='flex-comfort-score'>
        <div />
        <div />
        <div />
        <span style={{ left: scorePercentage(props.value) }} className='down-sym'>

        </span>
        <h5>{props.label1}</h5>
        <h5>{props.label2}</h5>
        <h5>{props.label3}</h5>
      </div>
    </div >

  );
};

const scorePercentage = (score) => {
  var percentage = 0;
  if (score < 2) {
    var start = score - 1;
    percentage = (start * 20);
  } else {
    percentage = (score * 20);
  }


  return '' + percentage + '%';
}

export default ComfortSizeBar;