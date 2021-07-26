import React from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'

const RelatedProductsTray = (props) => {
  return (
    <div className='related-product-tray'>
      {props.allProducts.map((product) => {
        return <RelatedProductCard product={product} />
      })}
    </div>
  )
}

export default RelatedProductsTray;