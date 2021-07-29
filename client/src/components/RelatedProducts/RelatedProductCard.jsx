import React from 'react';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import CompareModal from './CompareModal.jsx'

//each card represents a related product
const RelatedProductCard = (props) => {

  const [imageUrl, setImageUrl] = useState('');
  const [cardStyles, setCardStyles] = useState({});
  const [show, setShow] = useState(false);
  const [productOnCard, setProductOnCard] = useState({});

  useEffect(() => {
    apiCalls.getStyles(props.productId)
      .then((styles) => {
        var style = styles.data.results
        for (var i = 0; i < style.length; i++) {
            setCardStyles(style[i])
            setImageUrl(style[i].photos[0].thumbnail_url || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
        }
      })
    apiCalls.getFeatures(props.productId)
      .then((features) => {
        setProductOnCard(features.data)
      })
  }, [])

  return (
    <div className='related-product-card' onClick={() => props.setCurrentProduct(productOnCard)}>
      <button onClick={() => setShow(true) }>Compare</button>
      <CompareModal currentProduct={props.currentProduct} productOnCard={productOnCard} onClose={() => setShow(false)} show={show}/>
      <img src={imageUrl} height='400' width='300'/>
      <div>{productOnCard.category}</div>
      <div>{productOnCard.name}</div>
      <div>{productOnCard.default_price}</div>
      <div>5 Stars baby</div>
    </div>
  )
}

export default RelatedProductCard;