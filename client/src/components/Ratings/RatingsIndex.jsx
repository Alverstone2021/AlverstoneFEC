import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ScoresList from './ScoresList.jsx';


const RatingsIndex = (props) => {
  return (
    <div className='reviews-grid-container'>
      <div className='review-grid-item1'>
        <h4>RATINGS & REVIEWS</h4>
      </div>
      <ScoresList allRatings={props.allRatings} />
      <ReviewsList allRatings={props.allRatings} />
    </div>
  );
};

export default RatingsIndex;