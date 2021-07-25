import React from 'react';
import ReviewsList from './ReviewsList.jsx';

const RatingsIndex = (props) => {
  return (
    <div>
      <h1>This is my ratingsIndex app</h1>

      <ReviewsList allRatings={props.allRatings} />
    </div>
  );
};

export default RatingsIndex;