import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewsList = (props) => {
  return (
    <div className='review-grid-item3'>
      <h3>{props.allRatings.length} reviews, sorted by relevance</h3>
      <div className='reviewList-scrollable'>
        {props.allRatings.map((review, i) => {
          return <ReviewListItem key={i} review={review} />
        })}
      </div>
    </div>
  );
};

export default ReviewsList;