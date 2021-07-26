import React from 'react';

const RelatedProductCard = (props) => {
  return (
    <div className='related-product-card'>
      <div>{props.product.category}</div>
      <div>{props.product.name}</div>
      <div>{props.product.price}</div>
      <div>5 Stars baby</div>
    </div>
  )
}

export default RelatedProductCard;