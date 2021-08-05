import React from 'react'
import {useEffect, useState} from 'react'
import apiCalls from '../../../../helpers/shoppingApi.js';

const StarRating = (props) => {

  const [aggregatedRating, setAggregatedRating] = useState(0)

  useEffect(() => {
    if (props.productId === undefined && props.rating) {
      setAggregatedRating(props.rating)
    } else {
      apiCalls.getMetaData(props.productId)
      .then((reviews) => {
        setAggregatedRating(getAverage(reviews.data))
      })
      .catch((error) => {
        console.log('Error: ', error)
      })
    }
  }, [])

  return (
    <div className="Stars" style={{'--rating': aggregatedRating, '--star-size': props.size}} aria-label={`Rating of this product is ${aggregatedRating} out of 5.`}></div>
  )
}

const getAverage = (metaData) => {

  var total = 0;
  var sumStars = 0;

  total += parseInt(metaData.ratings[1] || 0);
  total += parseInt(metaData.ratings[2] || 0);
  total += parseInt(metaData.ratings[3] || 0);
  total += parseInt(metaData.ratings[4] || 0);
  total += parseInt(metaData.ratings[5] || 0);

  sumStars += parseInt(metaData.ratings[1] || 0);
  sumStars += parseInt((metaData.ratings[2] * 2) || 0);
  sumStars += parseInt((metaData.ratings[3] * 3) || 0);
  sumStars += parseInt((metaData.ratings[4] * 4) || 0);
  sumStars += parseInt((metaData.ratings[5] * 5) || 0);

  var decimal = sumStars / total;
  return Math.round(decimal * 10) / 10;
}

export default StarRating