import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewsList = (props) => {
  return (
    <div className='review-grid-item3'>
      <div className='review-dropdown'>
        <h3>{props.allRatings.length} reviews, sorted by </h3>
        <span className='review-dropspan'><h3>Relevance</h3>
          <div className='review-dropdown-content'>
            <p>Helpfulness</p>
            <p>Newest</p>
            <p>Relevance</p>
          </div>
        </span>
      </div>
      <div className='reviewList-scrollable'>
        {props.allRatings.map((review, i) => {
          return <ReviewListItem key={i} review={review} />
        })}
      </div>
    </div>
  );
};

export default ReviewsList;