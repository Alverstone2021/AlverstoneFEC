import React from 'react';

const ScoreBarItem = (props) => {
  return (
    <div className='flex-rating-score'>
      <label>{props.starLabel} stars({props.starCount})</label>
      <div style={{ width: '150px', height: '10px', 'background-color': 'gray' }}>
        <div style={{ height: '100%', width: props.starScore + '%', 'background-color': 'green' }}></div>
      </div >
      {/* <progress max='100' value={props.starScore}></progress> */}

    </div >

  );
}

export default ScoreBarItem;