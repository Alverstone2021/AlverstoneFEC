import React from 'react';
import { useEffect, useState } from 'react';
const moment = require('moment');
import StarsComponent from '../SharedComponents/Stars.jsx';

const ReviewsListItem = (props) => {

  const [helpfulNum, setHelpfulNum] = useState(0);
  const [didReport, setDidReport] = useState('');

  useEffect(() => {
    setHelpfulNum(props.review.helpfulness)
  }, [props.review]);

  var helpVal = 0;
  helpVal += props.review.helpfulness;

  return (
    <div className='reviewListItem-parent'>
      <div className='flex-review-starLabel'>
        <StarsComponent rating={props.review.rating} size={'30px'} />
        <h5>{props.review.reviewer_name}-{moment(props.review.date).format('MMMM Do YYYY')}</h5>
      </div>
      <h3>{props.review.summary}</h3>
      <p style={{ maxWidth: '810px' }}>{props.review.body}</p>
      <div className='reviewItem-photos-flex'>
        {
          props.review.photos.map((photo, i) => {
            return (
              <img key={'rphoto' + i} className='reviewItem-photos' src={photo.url}></img>
            )
          })
        }
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h4>Helpful?</h4>
        <h4 className='reviewItem-yes' onClick={() => {
          helpVal += 1;
          setHelpfulNum(helpVal);
        }}>Yes({helpfulNum})</h4>
        <h4 className='reviewItem-report' onClick={() => {
          setDidReport('-We will take a look!');
        }}>  |  Report {didReport}</h4>
      </div>
      <div className='review-divider'></div>
    </div>
  );
};

export default ReviewsListItem;