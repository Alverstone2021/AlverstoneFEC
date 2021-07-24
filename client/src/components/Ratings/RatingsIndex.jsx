import React from 'react';
import ScoresList from './ScoresList.jsx';

const RatingsIndex = (props) => {
  return (
    <div>
      <h1>This is my ratingsIndex app</h1>
      <ScoresList allRatings={props.allRatings} />
    </div>
  );
}

export default RatingsIndex;