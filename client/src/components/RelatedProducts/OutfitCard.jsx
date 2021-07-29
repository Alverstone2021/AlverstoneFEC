import React from 'react';
import {useEffect, useState} from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';

const OutfitCard = (props) => {

  const [imageUrl, setImageUrl] = useState('');
  const [cardStyles, setCardStyles] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiCalls.getStyles(props.product.id)
      .then((styles) => {
        var style = styles.data.results
        for (var i = 0; i < style.length; i++) {
            setCardStyles(style[i])
            setImageUrl(style[i].photos[0].thumbnail_url || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
        }
      })
  }, [])

  return (
    <div className='outfit-card'>
      <img src={imageUrl} height='400' width='300'/>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.default_price}</div>
    </div>
  )
}

{/* <div className='related-product-card' >
      <button onClick={() => setShow(true) }>Compare</button>
      <CompareModal currentProduct={props.currentProduct} productOnCard={productOnCard} onClose={() => setShow(false)} show={show}/>
      <img src={imageUrl} height='400' width='300' onClick={() => props.setCurrentProduct(productOnCard)}/>
      <div>{productOnCard.category}</div>
      <div>{productOnCard.name}</div>
      <div>{productOnCard.default_price}</div>
      <div>5 Stars baby</div>
    </div> */}

export default OutfitCard