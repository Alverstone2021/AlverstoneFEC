import React from 'react'
import RelatedProductCard from './RelatedProductCard.jsx'

//Renders a tray that holds all the related product cards, still needs to have scrolling functionality
const RelatedProductsTray = (props) => {


  console.log(props.relatedProductIds)

  return (
    <div className='related-product-tray'>

      {props.relatedProductIds.map((productId) => {
        return <RelatedProductCard productId={productId} key={productId} currentProduct={props.currentProduct} />
      })}

    </div>
  )
}

export default RelatedProductsTray;