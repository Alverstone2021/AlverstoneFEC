import React from 'react';

const ReviewsListItem = (props) => {
  return (
    <div className='reviewListItem-parent'>
      <div className='flex-review-starLabel'>
        <h5>STAR COMPONENT</h5>
        <h5>Username Date component</h5>
      </div>
      <h3>{props.review.summary}</h3>
      <p>{props.review.body}</p>
      <h5>Helpful Component</h5>
      <div className='review-divider'></div>
    </div>
  );
};

export default ReviewsListItem;