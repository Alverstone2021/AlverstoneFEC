import React from 'react';
import ScoreBarItem from './ScoreBarItem.jsx';

const ScoresList = (props) => {
  return (
    <div>
      <h4>RATINGS & REVIEWS</h4>
      <div className='flex-rating-header'>
        <h1>EXAMPLE: 3.5</h1>
        <p>Stars Component here!!</p>
      </div>
      <p>{getRecommend(props.allRatings)}% recommend this product</p>
      {getAverage(props.allRatings).map((rating, i) => {
        return <ScoreBarItem key={i} starLabel={rating.value} starScore={rating.score} />
      })}
    </div>
  );
};

// helper functions
const getAverage = (ratingArray) => {
  var total = ratingArray.length;
  // 0-index is 5 and counts down to index 4 === 1 star;
  var scoresArray = [
    { score: 0, value: 5 },
    { score: 0, value: 4 },
    { score: 0, value: 3 },
    { score: 0, value: 2 },
    { score: 0, value: 1 }
  ];

  // setup our scores array for the averages
  ratingArray.forEach((item) => {
    switch (item.rating) {
      case 5:
        scoresArray[0].score += 1;
        break;
      case 4:
        scoresArray[1].score += 1;
        break;
      case 3:
        scoresArray[2].score += 1;
        break;
      case 2:
        scoresArray[3].score += 1;
        break;
      case 1:
        scoresArray[4].score += 1;
        break;
      default:
        //Should not happen
        console.log('Hit default in switch ratings');
        break;
    }
  });

  // now find the averages of our array items
  for (var i = 0; i < scoresArray.length; i++) {
    scoresArray[i].score = Math.ceil((scoresArray[i].score / total) * 100);
  }

  //finally return our scores array
  return scoresArray;
}

const getRecommend = (ratingArray) => {
  var total = ratingArray.length;
  var totalRecomended = 0;
  ratingArray.forEach((review) => {
    if (review.recommend) {
      totalRecomended += 1;
    }
  });
  var percentage = Math.ceil((totalRecomended / total) * (100));
  return percentage;
}

export default ScoresList;