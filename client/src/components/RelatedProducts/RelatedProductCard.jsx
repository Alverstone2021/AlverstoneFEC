import React from 'react';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import CompareModal from './CompareModal.jsx'
import classNames from 'classnames'
import StarRating from '../SharedComponents/Stars.jsx'


//each card represents a related product
const RelatedProductCard = (props) => {

  const [imageUrl, setImageUrl] = useState('');
  const [cardStyles, setCardStyles] = useState({});
  const [show, setShow] = useState(false);
  const [productOnCard, setProductOnCard] = useState({});
  const [currentProductFeatures, setCurrentProductFeatures] = useState({})

  useEffect(() => {
    apiCalls.getStyles(props.productId)
      .then((styles) => {
        var style = styles.data.results
        for (var i = 0; i < style.length; i++) {
          if (style[i]['default?']) {
            setCardStyles(style[i])
            setImageUrl(style[i].photos[0].thumbnail_url || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
          } else if (style[i]['default?'] === false && i === style.length - 1) {
            setCardStyles(style[0])
            setImageUrl(style[0].photos[0].thumbnail_url || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
          }
        }
      })
    apiCalls.getFeatures(props.productId)
      .then((features) => {
        setProductOnCard(features.data)
      })
    apiCalls.getFeatures(props.currentProduct.id)
      .then((features) => {
        setCurrentProductFeatures(features.data)
      })
  }, [])

  const iconClass = classNames('remove-outfit-btn', 'fas fa-tshirt')

  return (
    <div className='related-product-card' >
      <i className={iconClass} onClick={() => setShow(true) } />
      <CompareModal currentProduct={currentProductFeatures} productOnCard={productOnCard} onClose={() => setShow(false)} show={show}/>
      <img src={imageUrl} height='400' width='310' onClick={() => {props.setCurrentProduct(productOnCard); props.setTrigger(props.trigger + 1); }} />
      <div className='rp-card-text'>{productOnCard.category}</div>
      <div className='rp-card-text'>{productOnCard.name}</div>
      <div className='rp-card-text'>{productOnCard.default_price}</div>
      <StarRating productId={props.productId}/>
    </div>
  )
}

export default RelatedProductCard;