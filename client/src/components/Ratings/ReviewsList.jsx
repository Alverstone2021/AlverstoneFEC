import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';

const ReviewsList = (props) => {
  return (
    <div className='reviewList-scrollable' >
      {
        props.filteredReviews.map((review, i) => {
          return <ReviewListItem key={i} review={review} />
        })
      }
    </div >
  );
};

export default ReviewsList;