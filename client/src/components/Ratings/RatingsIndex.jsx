import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ScoresList from './ScoresList.jsx';
import ComfortSizeBar from './ComfortSizeBar.jsx';


const RatingsIndex = (props) => {
  return (
    <div>
      <h1>This is my ratingsIndex app</h1>
      <ScoresList allRatings={props.allRatings} />
      <ReviewsList allRatings={props.allRatings} />
      <ComfortSizeBar />
    </div>
  );
};

export default RatingsIndex;