import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ScoresList from './ScoresList.jsx';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import ReviewModal from './ReviewModal.jsx';


const RatingsIndex = (props) => {

  const [allRatings, setAllRatings] = useState([]);
  const [metaData, setMetaData] = useState('');
  const [averageScore, setAverageScore] = useState(0);
  const [recommendVal, setRecommendVal] = useState(0);
  const [starsArray, setStarsArray] = useState([]);
  // filtering
  const [mainFilter, setMainFilter] = useState('r');
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [filterTitle, setFilterTitle] = useState('Relevance');
  // modal stuff
  const [showModal, setShowModal] = useState(false);
  //console.log('current product: ', props.currentProduct);

  //on props updated
  useEffect(() => {
    if (!props.currentProduct.id) return;
    apiCalls.getRatings(props.currentProduct.id)
      .then((ratings) => {
        // console.log('Reviews: ', ratings.data.results);
        setAllRatings(ratings.data.results);
        setFilteredReviews(sortData(ratings.data.results));
      })
      .catch((error) => {
        console.log('Error fetching reviews: ', error);
      });

    // now fetch the meta data
    apiCalls.getMetaData(props.currentProduct.id)
      .then((results) => {
        setMetaData(results.data);
        //get our average on results
        setAverageScore(getAverage(results.data));
        //get our percentage of recommend
        setRecommendVal(getRecPercent(results.data));
        //get our stars and percentages
        setStarsArray(getStarsPercentage(results.data));
      })
      .catch((error) => {
        console.log('Error fetching meta data: ', error);
      });

  }, [props.currentProduct]);

  //on filterObject update
  useEffect(() => {
  }, [mainFilter]);

  return (
    <div className='reviews-grid-container'>
      <div className='review-grid-item1'>
        <h4>RATINGS & REVIEWS</h4>
      </div>
      <ScoresList average={averageScore} recommend={recommendVal} starsArray={starsArray} characteristics={metaData.characteristics} allRatings={allRatings} />
      <div className='review-grid-item3'>
        <div className='review-dropdown'>
          <h3>{filteredReviews.length} reviews, sorted by </h3>
          <span className='review-dropspan'><h3>{filterTitle}</h3>
            <div className='review-dropdown-content'>
              <p onClick={() => {
                setFilterTitle('Helpfulness');
                setMainFilter('h');
                setFilteredReviews(sortData(allRatings, 'h'));
              }
              }>Helpfulness</p>
              <p onClick={() => {
                setFilterTitle('Newest');
                setMainFilter('n');
                setFilteredReviews(sortData(allRatings, 'n'));
              }
              }>Newest</p>
              <p onClick={() => {
                setFilterTitle('Relevance');
                setMainFilter('r');
                setFilteredReviews(sortData(allRatings, 'r'));
              }
              }>Relevance</p>
            </div>
          </span>
        </div>
        <ReviewsList filteredReviews={filteredReviews} />
        <button onClick={() => setShowModal(true)}>Add a review</button>
        <ReviewModal show={showModal} handleClose={setShowModal} />
      </div>
    </div>
  );
};

//helpers
const getAverage = (metaData) => {
  // get total amount of ratings
  var total = 0;
  var sumStars = 0;
  total += parseInt(metaData.ratings[1]);
  total += parseInt(metaData.ratings[2]);
  total += parseInt(metaData.ratings[3]);
  total += parseInt(metaData.ratings[4]);
  total += parseInt(metaData.ratings[5]);
  // adding to sumStars
  sumStars += parseInt(metaData.ratings[1]);
  sumStars += parseInt(metaData.ratings[2] * 2);
  sumStars += parseInt(metaData.ratings[3] * 3);
  sumStars += parseInt(metaData.ratings[4] * 4);
  sumStars += parseInt(metaData.ratings[5] * 5);

  // return average star review
  var decimal = sumStars / total;
  return Math.round(decimal * 10) / 10;
}

// get recommend percentage
const getRecPercent = (metaData) => {
  var total = 0;
  var doRecommend = 0;
  total += parseInt(metaData.recommended.true);
  total += parseInt(metaData.recommended.false);

  doRecommend += parseInt(metaData.recommended.true);

  //now return the percent

  var percentage = Math.ceil((doRecommend / total) * (100));
  return percentage;
}

// get stars values and count for score bars
const getStarsPercentage = (metaData) => {
  var total = 0;
  // 0-index is 5 and counts down to index 4 === 1 star;
  var scoresArray = [
    { score: 0, value: 5, count: 0 },
    { score: 0, value: 4, count: 0 },
    { score: 0, value: 3, count: 0 },
    { score: 0, value: 2, count: 0 },
    { score: 0, value: 1, count: 0 }
  ];
  // set total amount of ratings and get their percentages
  total += parseInt(metaData.ratings[1]);
  scoresArray[4].count = parseInt(metaData.ratings[1]);

  total += parseInt(metaData.ratings[2]);
  scoresArray[3].count = parseInt(metaData.ratings[2]);

  total += parseInt(metaData.ratings[3]);
  scoresArray[2].count = parseInt(metaData.ratings[3]);

  total += parseInt(metaData.ratings[4]);
  scoresArray[1].count = parseInt(metaData.ratings[4]);

  total += parseInt(metaData.ratings[5]);
  scoresArray[0].count = parseInt(metaData.ratings[5]);

  // now find the averages of our array items
  for (var i = 0; i < scoresArray.length; i++) {
    scoresArray[i].score = Math.ceil((scoresArray[i].count / total) * 100);
  }

  //finally return our scores array
  return scoresArray;
}


// filtering the data for the list
const setfilters = (key) => {

}

const sortData = (unfilteredArray, mainFilter = 'r') => {
  if (unfilteredArray.length === 0) {
    return [];
  }

  if (mainFilter === 'r') {
    unfilteredArray.sort(function (a, b) {
      return b.helpfulness - a.helpfulness;
    });
    return unfilteredArray;
  } else if (mainFilter === 'h') {
    unfilteredArray.sort(function (a, b) {
      return a.helpfulness - b.helpfulness;
    });
    return unfilteredArray;
  } else if (mainFilter === 'n') {
    unfilteredArray.sort(function (a, b) {
      return b.date - a.date;
    });
    return unfilteredArray;
  }
}

const clearFiltering = () => {

}
export default RatingsIndex;