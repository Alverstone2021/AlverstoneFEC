import React from 'react';

const ScoreBarItem = (props) => {
  return (
    <div className='flex-rating-score'>
      <label>{props.starLabel} stars({props.starCount})</label>
      <progress max='100' value={props.starScore}></progress>

    </div>

  );
}

export default ScoreBarItem;