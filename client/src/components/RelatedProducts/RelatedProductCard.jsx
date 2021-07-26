import React from 'react';
import { useEffect, useState } from 'react';
import apiCalls from '../../../../helpers/shoppingApi.js';



const RelatedProductCard = (props) => {

  const [imageUrl, setImageUrl] = useState('');
  const [cardStyles, setCardStyles] = useState({});

  // const imageChecker = () => {
  //   console.log('imageChecker', cardStyles)
  //   if (cardStyles.photos[0].url === null) {
  //     setImageUrl('https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
  //   } else {
  //     setImageUrl(cardStyles.photos[0].url)
  //   }
  // }

  useEffect(() => {
    apiCalls.getStyles(props.product.id)
      .then((styles) => {
        // console.log(styles)
        var style = styles.data.results
        for (var i = 0; i < style.length; i++) {
          if (style[i].['default?']) {
            console.log(style[i])
            setCardStyles(style[i])
            setImageUrl(style[i].photos[0].url || 'https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png')
          }
        }
      })

  }, [])


  return (
    <div className='related-product-card'>
      <img src={imageUrl} height='400' width='300'/>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.price}</div>
      <div>5 Stars baby</div>
    </div>
  )
}

//imageChecker checks if the style that will be rendered has an image associated with it, and if it doesn't assigns a placeholder.


export default RelatedProductCard;