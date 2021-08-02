import React from 'react';
const moment = require('moment');

const ReviewsListItem = (props) => {
  return (
    <div className='reviewListItem-parent'>
      <div className='flex-review-starLabel'>
        <h5>STAR COMPONENT</h5>
        <h5>{props.review.reviewer_name}-{moment(props.review.date).format('MMMM Do YYYY')}</h5>
      </div>
      <h3>{props.review.summary}</h3>
      <p>{props.review.body}</p>
      <h5>Helpful? Yes({props.review.helpfulness})  |  Report</h5>
      <div className='review-divider'></div>
    </div>
  );
};

export default ReviewsListItem;