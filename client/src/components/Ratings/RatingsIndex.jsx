import React from 'react';
import ReviewsList from './ReviewsList.jsx';
import ScoresList from './ScoresList.jsx';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import ReviewModal from './ReviewModal.jsx';
import ReviewListButtons from './ReviewListButtons.jsx';


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

  const [rating, setRating] = useState(0);
  const onSaveRating = (index) => {
    // console.log('rating score: ', index);
    setRating(index);
  };
  //object to track through modal
  var charObj = {};
  const [characteristicObj, setCharacteristicObj] = useState({});
  const updateCharObj = (key, value) => {
    charObj[key] = value;
    // console.log('charObj, ', charObj);
    //setCharacteristicObj(charObj);
  }
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [recommend, setRecommend] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  //axios Post
  const postReview = () => {
    var obj = {
      "product_id": props.currentProduct.id,
      "rating": rating,
      "summary": summary,
      "body": body,
      "recommend": recommend,
      "name": name,
      "email": email,
      "photos": photos,
      "characteristics": charObj
    }

    console.log('POST OBJECT: ', obj);
    apiCalls.postReview(obj)
      .then((results) => {
        // console.log('POST RESULTS: ', results);
        setShowModal(false);
        setFilterTitle('Newest');
        changeMainFilter('newest');
      })
      .catch((error) => {
        console.log('Error Post Reviews: ', error);
      })
  };
  /////////

  //filterStars
  var filterStarObj = {};

  const filterByStars = (filtObj) => {
    var finalFilter = [];
    for (var key in filtObj) {
      if (filtObj[key]) {
        var stateCopy = allRatings.slice();
        var pieceOfArray = stateCopy.filter((review) => {
          return review.rating == key;
        });
        for (var i = 0; i < pieceOfArray.length; i++) {
          finalFilter.push(pieceOfArray[i]);
        }
      }
    }
    setFilteredReviews(finalFilter);
  }

  const updateStarFilter = (key) => {
    if (filterStarObj[key]) {
      filterStarObj[key] = false;
    } else {
      filterStarObj[key] = true;
    }
    filterByStars(filterStarObj);
  }


  // const [filter1, setfilter1] = useState(false);
  // const [filter2, setfilter2] = useState(false);
  // const [filter3, setfilter3] = useState(false);
  // const [filter4, setfilter4] = useState(false);
  // const [filter5, setfilter5] = useState(false);
  //////

  //console.log('current product: ', props.currentProduct);
  const [showAmount, setShowAmount] = useState(2);
  const [showLoad, setShowLoad] = useState(true);


  //on props updated
  useEffect(() => {
    if (!props.currentProduct.id) return;
    apiCalls.getRatings(props.currentProduct.id, 'relevant')
      .then((ratings) => {
        // console.log('Reviews: ', ratings.data.results);
        setFilterTitle('Relevance');
        setAllRatings(ratings.data.results);
        // setFilteredReviews(sortData(ratings.data.results));
        // HERE YOU WILL APPLY THE STAR FILTERS

        setFilteredReviews(ratings.data.results);
        setShowAmount(2);
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

  //Changing the main filter
  const changeMainFilter = (value) => {
    apiCalls.getRatings(props.currentProduct.id, value)
      .then((ratings) => {
        // console.log('Reviews: ', ratings.data.results);
        setAllRatings(ratings.data.results)
        // setFilteredReviews(sortData(ratings.data.results));
        // HERE YOU WILL APPLY THE STAR FILTERS
        setFilteredReviews(ratings.data.results);
      })
      .catch((error) => {
        console.log('Error fetching reviews: ', error);
      });
  }

  // useEffect(() => {
  //   showReviewAmount(0);
  // }, [allRatings])

  //set show amount function
  const showReviewAmount = (incrementor) => {
    setShowAmount(incrementor += showAmount);
  }

  return (
    <div className='reviews-grid-container'>
      <div className='review-grid-item1'>
        <h4>RATINGS & REVIEWS</h4>
      </div>
      <ScoresList
        average={averageScore}
        recommend={recommendVal}
        starsArray={starsArray}
        characteristics={metaData.characteristics}
        allRatings={allRatings}
        currentProduct={props.currentProduct}
        updateStarFilter={updateStarFilter} />
      <div className='review-grid-item3'>
        <div className='review-dropdown'>
          <h3>{filteredReviews.length} reviews, sorted by </h3>
          <span className='review-dropspan'><h3>{filterTitle}</h3>
            <div className='review-dropdown-content'>
              <p onClick={() => {
                setFilterTitle('Helpfulness');
                changeMainFilter('helpful');
              }
              }>Helpfulness</p>
              <p onClick={() => {
                setFilterTitle('Newest');
                changeMainFilter('newest');
              }
              }>Newest</p>
              <p onClick={() => {
                setFilterTitle('Relevance');
                changeMainFilter('relevant');
              }
              }>Relevance</p>
            </div>
          </span>
        </div>
        <ReviewsList filterObj={filterStarObj} filteredReviews={filteredReviews} showAmount={showAmount} setShowLoad={setShowLoad} />
        <ReviewListButtons showLoad={showLoad} showAmount={showAmount} setShowAmount={setShowAmount} setShowModal={setShowModal} />
        <ReviewModal
          metaData={metaData}
          show={showModal}
          handleClose={setShowModal}
          updateCharObj={updateCharObj}
          rating={rating}
          onSaveRating={onSaveRating}
          setSummary={setSummary}
          setBody={setBody}
          setRecommend={setRecommend}
          setName={setName}
          setEmail={setEmail}
          setPhotos={setPhotos}
          postReview={postReview} />
      </div>
    </div >
  );
};

//helpers
const getAverage = (metaData) => {
  // get total amount of ratings
  var total = 0;
  var sumStars = 0;
  total += parseInt(metaData.ratings[1] || 0);
  total += parseInt(metaData.ratings[2] || 0);
  total += parseInt(metaData.ratings[3] || 0);
  total += parseInt(metaData.ratings[4] || 0);
  total += parseInt(metaData.ratings[5] || 0);
  // adding to sumStars
  sumStars += parseInt(metaData.ratings[1] || 0);
  sumStars += parseInt((metaData.ratings[2] * 2) || 0);
  sumStars += parseInt((metaData.ratings[3] * 3) || 0);
  sumStars += parseInt((metaData.ratings[4] * 4) || 0);
  sumStars += parseInt((metaData.ratings[5] * 5) || 0);

  // return average star review
  var decimal = sumStars / total;
  return Math.round(decimal * 10) / 10;
}

// get recommend percentage
const getRecPercent = (metaData) => {
  var total = 0;
  var doRecommend = 0;
  total += parseInt(metaData.recommended.true || 0);
  total += parseInt(metaData.recommended.false || 0);

  doRecommend += parseInt(metaData.recommended.true || 0);

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
  total += parseInt(metaData.ratings[1] || 0);
  scoresArray[4].count = parseInt(metaData.ratings[1] || 0);

  total += parseInt(metaData.ratings[2] || 0);
  scoresArray[3].count = parseInt(metaData.ratings[2] || 0);

  total += parseInt(metaData.ratings[3] || 0);
  scoresArray[2].count = parseInt(metaData.ratings[3] || 0);

  total += parseInt(metaData.ratings[4] || 0);
  scoresArray[1].count = parseInt(metaData.ratings[4] || 0);

  total += parseInt(metaData.ratings[5] || 0);
  scoresArray[0].count = parseInt(metaData.ratings[5] || 0);

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
      return a.helpfulness - b.helpfulness;
    });
    return unfilteredArray;
  } else if (mainFilter === 'h') {
    unfilteredArray.sort(function (a, b) {
      return b.helpfulness - a.helpfulness;
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