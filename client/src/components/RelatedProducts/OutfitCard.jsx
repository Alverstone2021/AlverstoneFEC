import React from 'react';
import {useEffect, useState} from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';
import classNames from 'classnames'

const OutfitCard = (props) => {

  const [imageUrl, setImageUrl] = useState('');
  const [cardStyles, setCardStyles] = useState({});
  const [show, setShow] = useState(false);

  useEffect(() => {
    apiCalls.getStyles(props.product.id)
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
  }, [])

  const removeFromOutfit = () => {
    localStorage.removeItem(JSON.stringify(props.product.id))
    props.setTrigger(props.trigger+1)
  }

  const btnClass = classNames('compare-modal-btn', 'fas fa-times')

  return (
    <div className='outfit-card'>
      <i className={btnClass} onClick={() => {removeFromOutfit()}} />
      <img className='outfit-img' src={imageUrl} height='400' width='310'/>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.default_price}</div>
      <div>so many stars dude</div>
    </div>
  )
}

export default OutfitCard