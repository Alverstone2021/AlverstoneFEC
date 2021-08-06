import React from 'react';
import ReviewListItem from './ReviewListItem.jsx';
import { useEffect } from 'react';

const ReviewsList = (props) => {

  const blockScrollClassName = (props.showAmount < 5 || props.filteredReviews.length <= 4) ? "reviewList-nonScroll" : "reviewList-scrollable";


  useEffect(() => {
    if (props.showAmount > 5 || props.showAmount > props.filteredReviews.length) {
      props.setShowLoad(false);
    } else {
      props.setShowLoad(true);
    }
  }, [props])


  //conditional render
  if (props.showAmount < 5) {
    return (
      <div className={blockScrollClassName} >
        {
          props.filteredReviews.map((review, i) => {
            if (i < props.showAmount) {
              return <ReviewListItem key={i} review={review} />
            }
          })
        }
      </div >
    );
  } else {
    return (
      <div className={blockScrollClassName} >
        {
          props.filteredReviews.map((review, i) => {
            return <ReviewListItem key={i} review={review} />
          })
        }
      </div >
    );
  }
};

export default ReviewsList;
