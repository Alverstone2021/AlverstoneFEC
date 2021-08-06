import React from 'react';

const ScoreBarItem = (props) => {
  return (
    <div className='flex-rating-score'>
      <label onClick={() => { props.updateStarFilter(props.starLabel) }}>{props.starLabel} stars</label>
      <div style={{ width: '150px', height: '10px', 'backgroundColor': 'lightgray' }}>
        <div style={{ height: '100%', width: props.starScore + '%', 'backgroundColor': 'green' }}></div>
      </div >
      <label>({props.starCount})</label>
      {/* <progress max='100' value={props.starScore}></progress> */}

    </div >

  );
}

export default ScoreBarItem;